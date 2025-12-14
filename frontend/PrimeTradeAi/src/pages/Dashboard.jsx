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
import { useSelector } from "react-redux";

const API_URL = "http://localhost:5000/api/v1/tasks";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [completed, setCompleted] = useState({});

  const token = localStorage.getItem("token");

  const axiosAuth = axios.create({
    headers: { Authorization: `Bearer ${token}` },
  });

  /* ================= FETCH ================= */
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axiosAuth.get(API_URL);
      setTasks(res.data.data || res.data);
    } catch {
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  /* ================= CREATE ================= */
  const createTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const res = await axiosAuth.post(API_URL, { title });
      setTasks([res.data.data || res.data, ...tasks]);
      setTitle("");
    } catch {
      setError("Failed to create task");
    }
  };

  /* ================= UPDATE ================= */
  const updateTask = async (id) => {
    if (!editTitle.trim()) return;

    try {
      await axiosAuth.put(`${API_URL}/${id}`, { title: editTitle });
      setTasks(
        tasks.map((t) =>
          t._id === id ? { ...t, title: editTitle } : t
        )
      );
      setEditingId(null);
      setEditTitle("");
    } catch {
      setError("Update failed");
    }
  };

  /* ================= DELETE ================= */
  const deleteTask = async (id) => {
    try {
      await axiosAuth.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
      setCompleted((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    } catch {
      setError("Delete failed");
    }
  };

  /* ================= TOGGLE COMPLETE ================= */
  const toggleComplete = (id) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  /* ================= LOGOUT ================= */
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const completedCount = tasks.filter((t) => completed[t._id]).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-6 py-10">

      {/* ===== HEADER ===== */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-semibold">
            Welcome, {user?.name?.split(" ")[0]} 👋
          </h1>
          <p className="text-sm text-white/60 mt-1">
            Role: <span className="capitalize">{user?.role}</span>
          </p>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm
                     text-white/60 hover:text-red-400
                     hover:bg-red-500/10 transition cursor-pointer"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* ===== STATS ===== */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: "Total Tasks", value: tasks.length },
          { label: "Completed", value: completedCount },
          { label: "Pending", value: pendingCount },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm text-white/60">{stat.label}</p>
            <p className="text-3xl font-semibold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* ===== CREATE TASK ===== */}
      <div className="max-w-5xl mx-auto mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <form onSubmit={createTask} className="flex items-center gap-4">
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What do you want to accomplish today?"
            rows={2}
            className="flex-1 resize-none rounded-xl bg-black/40 border border-white/10
                       px-4 py-3 text-sm text-white placeholder-white/30
                       focus:outline-none focus:border-green-400/60"
          />

          <button
            type="submit"
            className="flex items-center gap-2 h-[44px] px-4 rounded-lg
                       bg-[#773397]
                       text-sm font-medium text-white
                       
                       
                       transition shrink-0 cursor-pointer"
          >
            <Plus size={14} />
            <span>Add</span>
          </button>
        </form>
      </div>

      {/* ===== ERROR ===== */}
      {error && (
        <div className="max-w-5xl mx-auto mb-6 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* ===== TASK LIST ===== */}
      <div className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-lg font-semibold mb-2">Tasks</h2>

        {loading && <p className="text-white/60">Loading tasks...</p>}

        {!loading && tasks.length === 0 && (
          <p className="text-white/50">No tasks yet. Start by adding one</p>
        )}

        {tasks.map((task) => {
          const isDone = completed[task._id];

          return (
            <div
              key={task._id}
              className={`rounded-2xl border border-white/10 p-5 transition
              ${isDone ? "bg-emerald-400/10" : "bg-purple-500/10"}`}
            >
              <div className="flex items-start gap-4">

                {/* Checkbox */}
                <button
                  onClick={() => toggleComplete(task._id)}
                  className="mt-0.5 shrink-0 cursor-pointer"
                >
                  {isDone ? (
                    <CheckCircle className="text-emerald-400" size={20} />
                  ) : (
                    <Circle className="text-purple-400" size={20} />
                  )}
                </button>

                {/* Task text */}
                <div className="flex-1 min-w-0">
                  {editingId === task._id ? (
                    <textarea
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      rows={2}
                      className="w-full resize-none rounded-lg bg-black/40 border border-white/10
                                 px-3 py-2 text-sm text-white
                                 focus:outline-none focus:border-purple-400/60"
                    />
                  ) : (
                    <p
                      className={`text-sm whitespace-pre-wrap break-words leading-relaxed
                      ${isDone ? "line-through text-white/40" : ""}`}
                    >
                      {task.title}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 shrink-0 ">
                  {editingId === task._id ? (
                    <button
                      onClick={() => updateTask(task._id)}
                      className="text-emerald-400 text-sm hover:underline"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setEditingId(task._id);
                        setEditTitle(task.title);
                      }}
                      className="text-white/60 hover:text-white cursor-pointer"
                    >
                      <Pencil size={16} />
                    </button>
                  )}

                  <button
                    onClick={() => deleteTask(task._id)}
                    className="text-white/60 hover:text-red-400"
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
