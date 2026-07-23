import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login as loginUser } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

function LoginPage() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginUser(formData);

            login(response.data.user, response.data.token);

            navigate("/");
        } catch (error) {
            alert(error.response?.data?.message || "Login Failed");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">

            <h2 className="text-2xl font-bold">
                Login
            </h2>

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
                Login
            </button>

        </form>
    );
}

export default LoginPage;