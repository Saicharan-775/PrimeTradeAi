import { useEffect, useState } from "react";
import axios from "axios";
import {
  LogOut,
  Plus,
  Trash2,
  Pencil,
  CheckCircle,
  Circle,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout as logoutAction } from "../slices/authSlice";
import { API_URL } from "../config/api";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [completed, setCompleted] = useState({});
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  /* ================= AXIOS INSTANCE ================= */
  const axiosAuth = axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  /* ================= FETCH TASKS ================= */
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axiosAuth.get("/api/v1/tasks");

      const data = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data?.data)
        ? res.data.data
        : [];

      setTasks(data);
    } catch {
      setTasks([]);
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  /* ================= CREATE TASK ================= */
  const createTask = async (e) => {
    e.preventDefault();
    if (!title.trim() || actionLoading) return;

    setActionLoading(true);

    const tempTask = { _id: Date.now().toString(), title };
    setTasks((prev) => [tempTask, ...prev]);
    setTitle("");

    try {
      const res = await axiosAuth.post("/api/v1/tasks", { title });
      const saved = res.data?.data || res.data;

      setTasks((prev) =>
        prev.map((t) => (t._id === tempTask._id ? saved : t))
      );
    } catch {
      setTasks((prev) => prev.filter((t) => t._id !== tempTask._id));
      setError("Failed to create task");
    } finally {
      setActionLoading(false);
    }
  };

  /* ================= UPDATE TASK ================= */
  const updateTask = async (id) => {
    if (!editTitle.trim() || actionLoading) return;

    setActionLoading(true);

    try {
      await axiosAuth.put(`/api/v1/tasks/${id}`, { title: editTitle });
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? { ...t, title: editTitle } : t))
      );
      setEditingId(null);
      setEditTitle("");
    } catch {
      setError("Update failed");
    } finally {
      setActionLoading(false);
    }
  };

  /* ================= DELETE TASK ================= */
  const deleteTask = async (id) => {
    if (actionLoading) return;

    setActionLoading(true);
    const backup = tasks;

    setTasks((prev) => prev.filter((t) => t._id !== id));

    try {
      await axiosAuth.delete(`/api/v1/tasks/${id}`);
    } catch {
      setTasks(backup);
      setError("Delete failed");
    } finally {
      setActionLoading(false);
    }
  };

  /* ================= TOGGLE COMPLETE ================= */
  const toggleComplete = (id) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  /* ================= LOGOUT (CORRECT WAY) ================= */
  const logout = () => {
    dispatch(logoutAction());      // clears redux + localStorage
    navigate("/login", { replace: true });
  };

  const completedCount = tasks.filter((t) => completed[t._id]).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-6 py-10">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto flex justify-between mb-10">
        <div>
          <h1 className="text-3xl font-semibold">
            Welcome, {user?.name?.split(" ")[0]} 👋
          </h1>
          <p className="text-sm text-white/60">
            Role: <span className="capitalize">{user?.role}</span>
          </p>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-full px-4 py-2
                     text-white/60 hover:text-red-400
                     hover:bg-red-500/10 transition cursor-pointer"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* STATS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-10">
        {[
          { label: "Total Tasks", value: tasks.length },
          { label: "Completed", value: completedCount },
          { label: "Pending", value: pendingCount },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-white/5 p-6">
            <p className="text-sm text-white/60">{s.label}</p>
            <p className="text-3xl font-semibold mt-2">{s.value}</p>
          </div>
        ))}
      </div>

      {/* CREATE */}
      <div className="max-w-5xl mx-auto mb-8 rounded-2xl bg-white/5 p-6">
        <form onSubmit={createTask} className="flex gap-4">
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What do you want to accomplish today?"
            rows={2}
            className="flex-1 rounded-xl bg-black/40 px-4 py-3"
          />
         <button
  type="submit"
  disabled={actionLoading}
  className="
    flex items-center justify-center gap-2
    min-w-[100px] h-[44px]
    rounded-lg
    bg-purple-600 text-white
    hover:bg-purple-500
    transition
    cursor-pointer
    mt-2
    disabled:opacity-50
  "
>
  <Plus size={16} />
  <span className="text-sm font-medium">Add</span>
</button>

        </form>
      </div>

      {/* TASK LIST */}
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="font-medium text-2xl">Tasks</h1>
        {loading && <p className="text-white/60">Loading...</p>}

        {!loading && tasks.length === 0 && (
          <p className="text-white/50">No tasks yet</p>
        )}

        {tasks.map((task) => {
          const done = completed[task._id];
          return (
            <div
              key={task._id}
              className={`rounded-2xl p-5
                ${done ? "bg-emerald-400/10" : "bg-purple-500/10"}`}
            >
              <div className="flex gap-4">
                <button
                  onClick={() => toggleComplete(task._id)}
                  className="cursor-pointer"
                >
                  {done ? (
                    <CheckCircle className="text-emerald-400" />
                  ) : (
                    <Circle className="text-purple-400" />
                  )}
                </button>

                <div className="flex-1">
                  {editingId === task._id ? (
                    <textarea
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      rows={2}
                      className="w-full bg-black/40 rounded-lg px-3 py-2"
                    />
                  ) : (
                    <p className={done ? "line-through text-white/40" : ""}>
                      {task.title}
                    </p>
                  )}
                </div>

                <div className="flex gap-3">
                  {editingId === task._id ? (
                    <button
                      onClick={() => updateTask(task._id)}
                      className="text-emerald-400 cursor-pointer"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setEditingId(task._id);
                        setEditTitle(task.title);
                      }}
                      className="cursor-pointer"
                    >
                      <Pencil size={16} />
                    </button>
                  )}

                  <button
                    onClick={() => deleteTask(task._id)}
                    className="cursor-pointer hover:text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
