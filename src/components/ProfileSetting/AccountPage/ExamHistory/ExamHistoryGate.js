import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExamHistoryEmpty from "./ExamHistory"; // Page-1 (Empty)
import ExamTrackResults from "./ExamTrackResults"; // Page-2 (List)

// ✅ FUTURE: yahin API call lagaani hai (Java/Spring Boot)
// e.g. GET /api/exams?limit=1  -> if any item, return true
async function checkHasHistory() {
  // ---- UI-only stub ----
  // return false; // to test empty page
  return true; // to test list page
  // ---- replace with real API later ----
  // try {
  //   const res = await fetch(`${BASE_URL}/api/exams?limit=1`);
  //   if (!res.ok) return false;
  //   const data = await res.json();
  //   return Array.isArray(data) && data.length > 0;
  // } catch {
  //   return false;
  // }
}

export default function ExamHistoryGate() {
  const navigate = useNavigate();
  const [state, setState] = useState({ loading: true, hasHistory: false });

  useEffect(() => {
    let mounted = true;
    (async () => {
      const has = await checkHasHistory();
      if (!mounted) return;
      setState({ loading: false, hasHistory: has });
      // NOTE: Do NOT navigate here; render decide karega for smoother UX
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (state.loading) {
    // lightweight skeleton
    return (
      <div className="min-h-screen w-full bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 pt-5 md:pt-6 pb-5 md:pb-6">
          <div className="w-full bg-white border-2 border-[#E9E9E9] rounded-[12px] shadow-sm p-6 animate-pulse">
            <div className="h-5 w-40 bg-gray-200 rounded" />
            <div className="mt-4 h-4 w-80 bg-gray-200 rounded" />
            <div className="mt-8 h-32 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  // has history => show Page-2 (List), else Page-1 (Empty)
  return state.hasHistory ? <ExamTrackResults /> : <ExamHistoryEmpty />;
}
