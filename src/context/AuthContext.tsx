import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in via localStorage
    const savedUser = localStorage.getItem("just_is_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem("just_is_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, _password: string) => {
    // Mock login logic - in a real app, this would hit an API
    const users = JSON.parse(localStorage.getItem("just_is_registered_users") || "[]");
    const foundUser = users.find((u: any) => u.email === email);

    if (foundUser) {
      const userData = { email: foundUser.email, name: foundUser.name };
      setUser(userData);
      localStorage.setItem("just_is_user", JSON.stringify(userData));
    } else {
      throw new Error("Invalid credentials or account not found.");
    }
  };

  const signup = async (name: string, email: string, _password: string) => {
    // Mock signup logic
    const users = JSON.parse(localStorage.getItem("just_is_registered_users") || "[]");
    
    if (users.some((u: any) => u.email === email)) {
      throw new Error("An account with this email already exists.");
    }

    const newUser = { name, email };
    users.push({ ...newUser, _mock_password: _password });
    localStorage.setItem("just_is_registered_users", JSON.stringify(users));
    
    setUser(newUser);
    localStorage.setItem("just_is_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("just_is_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
