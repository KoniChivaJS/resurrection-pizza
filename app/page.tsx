import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Filters */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of pizzas */}
          <div className="flex-1">
            <div className="flex flex-col gap-12">List of pizzas</div>
          </div>
        </div>
      </Container>
    </>
  );
}
