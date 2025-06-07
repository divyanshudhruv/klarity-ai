import supabase from "./supabase";

export const fetchUser = async () => {
const session = await supabase.auth.getSession();
if (session?.data?.session) {
    return {
        user: session.data.session.user,
    };
} else {
    return {
        error: "No session data available.",
    };
}
};
