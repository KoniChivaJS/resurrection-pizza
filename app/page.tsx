import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          prodcutItems: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="All Products" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        items={categories.filter((category) => category.products.length > 0)}
      />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Filters */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of pizzas */}
          <div className="flex-1">
            <div className="flex flex-col gap-12">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      items={category.products}
                      categoryId={category.id}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
