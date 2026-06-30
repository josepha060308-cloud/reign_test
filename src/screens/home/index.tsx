import { Tabs } from "../../components/tabs"

const Home = () : React.ReactElement => {

  return(
      <div className="container">
        <div style={{ textAlign: "center", padding: "10px", background: "#f0f0f0" }}>
          <p>Integrantes: Aguilar Joseph, Quico Nicolas, Berrocal Alessandro</p>
        </div>
        <div className="row">
          <Tabs />
        </div>
      </div> 
  )
}
export { Home }
