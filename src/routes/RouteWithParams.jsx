import { useParams } from "react-router-dom";

const RouteWithParams = () => {

    // /routeparam/:id
    const {id} = useParams();
    console.log(id);
    return ( 
        <section>
            <h2>
                This is a route which reads the path params with id: {id}
            </h2>
        </section>
     );
}
 
export default RouteWithParams;