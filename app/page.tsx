import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Products" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Filters */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of pizzas */}
          <div className="flex-1">
            <div className="flex flex-col gap-12">
              <ProductsGroupList
                title="Pizza"
                items={[
                  {
                    id: 1,
                    name: "Cheese Pizza",
                    imageUrl:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s",
                    items: [{ price: 9.9 }],
                  },
                  {
                    id: 2,
                    name: "Cheese Pizza",
                    imageUrl:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s",
                    items: [{ price: 9.9 }],
                  },
                  {
                    id: 3,
                    name: "Cheese Pizza",
                    imageUrl:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s",
                    items: [{ price: 9.9 }],
                  },
                  {
                    id: 4,
                    name: "Cheese Pizza",
                    imageUrl:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s",
                    items: [{ price: 9.9 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Combo"
                items={[
                  {
                    id: 1,
                    name: "Cheese Pizza",
                    imageUrl:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s",
                    items: [{ price: 9.9 }],
                  },
                  {
                    id: 2,
                    name: "Cheese Pizza",
                    imageUrl:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s",
                    items: [{ price: 9.9 }],
                  },
                  {
                    id: 3,
                    name: "Cheese Pizza",
                    imageUrl:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s",
                    items: [{ price: 9.9 }],
                  },
                  {
                    id: 4,
                    name: "Cheese Pizza",
                    imageUrl:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s",
                    items: [{ price: 9.9 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
