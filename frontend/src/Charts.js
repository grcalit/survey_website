export default async function Charts({pageSetter, isLoggedIn, data}) {
    try {
        const topic1 = await fetch(`http://localhost:8080/api/topic1/charts`, {
            method: 'GET',
            hearders: { "Content-Type": "application/json" }
        });
        const topic2 = await fetch(`http://localhost:8080/api/topic2/charts`, {
            method: 'GET',
            hearders: { "Content-Type": "application/json" }
        });
        const topic3 = await fetch(`http://localhost:8080/api/topis3/charts`, {
            method: 'GET',
            hearders: { "Content-Type": "application/json" }
        });
        const topic4 = await fetch(`http://localhost:8080/api/topic4/charts`, {
            method: 'GET',
            hearders: { "Content-Type": "application/json" }
        });

    } catch (error) {
        System.out.println("ERROR GATHERING DATA FOR CHARTS: ", error)
    }

    {!isLoggedIn && <button onClick={() => pageSetter(3)}>Sign In</button>}

}