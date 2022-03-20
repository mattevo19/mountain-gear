import Menu from "./components/menu/menu.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Shoes",
      imageUrl:
        "https://images.unsplash.com/photo-1478827227954-745b0daf2534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Chalk",
      imageUrl:
        "https://images.unsplash.com/photo-1550265486-df3659283974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      title: "Chalk Bag",
      imageUrl:
        "https://images.unsplash.com/photo-1473441732394-649138d63985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      title: "Belay Device",
      imageUrl:
        "https://images.unsplash.com/photo-1586685256769-4e869a64f1eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 5,
      title: "Ropes",
      imageUrl:
        "https://images.unsplash.com/photo-1635360404916-a7919e7de16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return <Menu categories={categories} />;
};

export default App;
