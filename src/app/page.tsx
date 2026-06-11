import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: universities, error } = await supabase
    .from("universities")
    .select("*")
    .order("id");

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        大学駅伝育成ゲーム
      </h1>

      <h2 className="text-xl font-semibold mb-3">
        大学一覧
      </h2>

      {error && (
        <p className="text-red-500">
          エラー: {error.message}
        </p>
      )}

      <ul className="space-y-2">
        {universities?.map((university) => (
          <li key={university.id}>
            {university.name}
          </li>
        ))}
      </ul>
    </main>
  );
}