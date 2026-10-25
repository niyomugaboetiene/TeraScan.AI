import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state.result) {
        return (
            <main className="min-h-screen bg-[#00151D]">

            </main>
        )
    }
}