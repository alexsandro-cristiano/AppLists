import Aside from "@/components/Aside";
import Card from "@/components/Card";

export default function Dashboard() {
  return (
    <div className={`flex h-screen`}>
      <Aside />

      <main className={`flex-1 p-6 overflow-y-scroll`}>
        <section className={`flex flex-col gap-5`}>
          <h2 className={`subtitle`}>title</h2>
          <div className={`grid grid-cols-5`}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </div>
  );
}
