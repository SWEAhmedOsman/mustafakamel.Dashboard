import React, { useState, useEffect } from "react";
import { Error, Feedbacks, HomeCards, Loading, Orders } from "../components";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { data, error, loading } = useSelector((state) => state.global);

  // const currentOrders = [
  //   {
  //     id: 1,
  //     Name: "مصطفي كامل أحمد",
  //     Email: "mostafa.kamel95@example.com",
  //     Budget: "1 - 2 ألف",
  //     Timeline: "5 - 4 أشهر",
  //     date: "22 ديسمبر",
  //     status: "pennding",
  //   },
  //   {
  //     id: 2,
  //     Name: "مصطفي كامل أحمد",
  //     Email: "mostafa.kamel95@example.com",
  //     Budget: "1 - 2 ألف",
  //     Timeline: "5 - 4 أشهر",
  //     date: "22 ديسمبر",
  //     status: "pennding",
  //   },
  //   {
  //     id: 3,
  //     Name: "مصطفي كامل أحمد",
  //     Email: "mostafa.kamel95@example.com",
  //     Budget: "1 - 2 ألف",
  //     Timeline: "5 - 4 أشهر",
  //     date: "22 ديسمبر",
  //     status: "pennding",
  //   },
  // ];

  // const currentFeedbacks = [
  //   {
  //     id: 1,
  //     name: "مصطفي كامل أحمد",
  //     comment:
  //       "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..",
  //     date: "22 ديسمبر",
  //     status: "pennding",
  //   },
  //   {
  //     id: 2,
  //     name: "مصطفي كامل أحمد",
  //     comment:
  //       "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..",
  //     date: "22 ديسمبر",
  //     status: "approved",
  //   },
  //   {
  //     id: 3,
  //     name: "مصطفي كامل أحمد",
  //     comment:
  //       "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..",
  //     date: "22 ديسمبر",
  //     status: "canceled",
  //   },
  // ];

  const [numOfLiks, setNumOfLiks] = useState(0);
  const [numOfOrders, setNumOfOrders] = useState(0);
  const [numOfFeedbacks, setNumOfFeedbacks] = useState(0);

  useEffect(() => {
    // setOrders(currentOrders);
    // setFeedbacks(currentFeedbacks);
    setNumOfLiks(20);
    setNumOfOrders(10);
    setNumOfFeedbacks(14);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <div>
      <HomeCards
        liks={numOfLiks}
        orders={numOfOrders}
        feedback={numOfFeedbacks}
      />
      <Orders orders={data?.ProjectRequests} />
      <Feedbacks feedbacks={data?.Feedbacks} />
    </div>
  );
};

export default AdminHome;
