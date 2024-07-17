import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Header() {
  const [user, setUser] = useState<{ username: string } | null>({
    username: "demo user",
  });

  const navigate = useNavigate();

  function handleLogout() {
    setUser(null);
    navigate("/");
  }

  return (
    <header>
      <div className="flex justify-center py-2 align-element sm:justify-end">
        {/* USER */}

        {user ? (
          <div className="flex items-center gap-x-2 sm:gap-x-8">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button variant="link" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-center -mr-4 gap-x-6">
            <Button asChild variant="link" size="sm">
              <Link to="/login">Sign in / Guest</Link>
            </Button>

            <Button asChild variant="link" size="sm">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
