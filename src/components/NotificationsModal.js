import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

export default function NotificationsModal({
  open = false,
  onClose = () => {},
  items = [],
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="absolute right-4 top-16 w-80 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-2 border-b flex items-center justify-between">
          <span className="font-semibold text-gray-800">Notifications</span>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-gray-100"
            aria-label="Close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="max-h-64 overflow-y-auto">
          {items.length > 0 ? (
            items.map((n) => (
              <li
                key={n.id}
                className="px-4 py-3 flex items-start gap-3 hover:bg-gray-50">
                <CalendarIcon className="h-5 w-5 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-800">{n.text}</p>
                  <p className="text-xs text-gray-500">{n.time}</p>
                </div>
              </li>
            ))
          ) : (
            <li className="px-4 py-6 text-center text-sm text-gray-500">
              No new notifications
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
