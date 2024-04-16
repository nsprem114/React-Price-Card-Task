import PriceCardTask from "./assets/components/PriceCardTask";
import Header from "./assets/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  let data = [
    {
      title: "FREE",
      price: "$0",
      user: "Single User",
      storage: "5GB Storage",
      domain: "Free Subdomain",
      project: "text-muted",
      projectIcon: "fas fa-times",
      phone: "text-muted",
      phoneIcon: "fas fa-times",
      subDomain: "text-muted",
      subDomainIcon: "fas fa-times",
      monthly: "text-muted",
      monthlyIcon: "fas fa-times",
    },
    {
      title: "PLUS",
      price: "$9",
      user: "5 Users",
      storage: "50GB Storage",
      domain: "Free Subdomain",
      project: "",
      projectIcon: "fas fa-check",
      phone: "",
      phoneIcon: "fas fa-check",
      subDomain: "",
      subDomainIcon: "fas fa-check",
      monthly: "text-muted",
      monthlyIcon: "fas fa-times",
    },
    {
      title: "PRO",
      price: "$49",
      user: "Unlimited Users",
      storage: "150GB Storage",
      domain: "Unlimited Free Subdomain",
      project: "",
      projectIcon: "fas fa-check",
      phone: "",
      phoneIcon: "fas fa-check",
      subDomain: "",
      subDomainIcon: "fas fa-check",
      monthly: "",
      monthlyIcon: "fas fa-check",
    },
  ];

  return (
    <div className="App">
      <Header />
      <section className="pricing py-5 bg-primary">
        <div className="container">
          <div className="row">
            {data.map((e, i) => {
              return <PriceCardTask cardData={e} key={i} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
