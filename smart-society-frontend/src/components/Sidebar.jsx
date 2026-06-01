import {
  Link,
  useLocation
} from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  // ================= MENU ITEMS =================

  const menuItems = [

    {
      name: "Dashboard",
      icon: "📊",
      path: "/dashboard"
    },

    {
      name: "Analytics",
      icon: "📈",
      path: "/dashboard/analytics"
    },

    {
      name: "Activity Logs",
      icon: "📋",
      path: "/dashboard/activity-logs"
    },
    {
      name: "Residents",
      icon: "👨‍👩‍👧",
      path: "/dashboard/residents"
    },

    {
      name: "Complaints",
      icon: "📝",
      path: "/dashboard/complaints"
    },

    {
      name: "Vehicles",
      icon: "🚗",
      path: "/dashboard/vehicles"
    },

    {
      name: "Payments",
      icon: "💳",
      path: "/dashboard/payments"
    },

    {
      name: "Maintenance",
      icon: "🛠",
      path: "/dashboard/maintenance"
    },

    {
      name: "Notifications",
      icon: "🔔",
      path: "/dashboard/notifications"
    },

    

    {
      name: "Delivery",
      icon: "📦",
      path: "/dashboard/delivery"
    },

    {
      name: "Emergency",
      icon: "🚨",
      path: "/dashboard/emergency"
    },

    {
      name: "Notices",
      icon: "📢",
      path: "/dashboard/notices"
    },

    {
      name: "Parking",
      icon: "🅿",
      path: "/dashboard/parking"
    },

    {
      name: "Reminders",
      icon: "⏰",
      path: "/dashboard/reminders"
    },

    {
      name: "Reputation",
      icon: "🏆",
      path: "/dashboard/reputation"
    },

    {
      name: "Societies",
      icon: "🏢",
      path: "/dashboard/societies"
    },

    {
      name: "Visitors",
      icon: "👤",
      path: "/dashboard/visitor-approval"
    }

  ];

  return (

    <aside className="w-64 h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white flex flex-col">

      {/* TOP SPACE */}

      <div className="h-6"></div>

      {/* MENU */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        <nav className="space-y-2">

          {menuItems.map((item, index) => (

            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 text-lg font-medium

              ${
                location.pathname === item.path
                  ? "bg-blue-600 shadow-lg"
                  : "hover:bg-blue-800/60"
              }`}
            >

              <span className="text-xl">

                {item.icon}

              </span>

              <span>

                {item.name}

              </span>

            </Link>

          ))}

        </nav>

      </div>

    </aside>
  );
}

export default Sidebar;