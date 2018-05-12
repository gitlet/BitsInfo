import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const index = (props) => (
    <Layout>
        <div>
            <h1>BitsInfo</h1>
            <p>Get the latest updates pertaining to your fav crypto currencies</p>
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
);

index.getInitialProps = async function () {
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await res.json();

    return {
        bpi: data.bpi
    };
}

export default index;