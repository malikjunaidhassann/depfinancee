"use client";

import { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice";
import { LogOut } from "../Services/Auth";

interface UserMenuProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: (el: HTMLElement | null) => void;
}

export default function UserMenu({ anchorEl, setAnchorEl }: UserMenuProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    LogOut();
    dispatch(logout());
    handleClose();
  };

  return (
    <div className="relative">
      {/* Avatar Placeholder */}
      <div
        id="user-avatar"
        onClick={handleClick}
        aria-controls={menuOpen ? "user-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? "true" : undefined}
        className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer select-none"
      >
        <span className="text-sm font-bold text-gray-700">U</span>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          id="user-menu"
          role="menu"
          className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-50"
        >
          <button
            onClick={() => {
              router.push("/auth/profile");
              handleClose();
            }}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            My Account
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            role="menuitem"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
