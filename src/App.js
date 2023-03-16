import "./App.css";
import { Routes, Route } from "react-router-dom";
import Searcher from "./pages/Searcher";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 spotiNav">
          <div className="buttonscontainer pt-2 pt-md-5">
            <Link className="navButtons" to="/">
              <img
                alt="home icon"
                className="lupaNav"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgElEQVR4nO3Xv0tVYRgH8FeJQsiyIQdb3GwJJzdBIgL/g5zEqbmtf6G10bUpEEQERxFUgiJoagmXlkKjQQiHEj8hvNLBH9xzj8fTOfh84HKHy31fvrzf97nnphR6wzg28ms8dREeY9c/PzGbugIDeIlDZx3hFQZTm+EOlvW2hnupjTCJHeV9xdSpNc7VZIh5HOjf8XfmC+u8wO/Gg+AWXru8NxjKa07jW2NB8ADv1OfjyYjGfaxfeRDM4Lv6/cDTvMeNPOGOmh6tdTnMewzkPZ/VHWIYS5qzipG6QzzEZ837gkd1hZjDL//PARYuE+DksrXFIm72G2K0OP5aZBtjZUOc+UFqmT086RXi+XmPCC30pziiiwFu463uWcHdYpAP+YN93bGf398Xgxxfok+Y0B0T+fls86J70gmpxNTqhBRBWibFibRMihO5TieS+hRBxImUE9WqIMVlLyGqVUGKapUQ1aogRbVKiGpVkKJaJUS1rqhaWx34Y7XZ714hpGr+AkXKksGDJl/EAAAAAElFTkSuQmCC"
              ></img>
              Home
            </Link>
            <Link className="navButtons" to="/search">
              <img
                className="lupaNav"
                alt="lupa icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2ZzUuUURSHXzdlNAURoW41ym2boIVfiX9BSy2iQAz8H5JaqO3dZxBESx382NaiD21Z1qZNu8yVUc0YPXHxQLfT9TYznjvzTr0PDAwD7/mdw33PPR+TZQUF+QPoAW4CD4BXwCegKp9tYBNYBG4A3VneAIaBMvCd2tkDloHBPARwFljj8KwAfa0K4hrwGTt2gYlmB3En4tAbYBYYBc4Dx+XTL7/NAVuR52eaFcTdAxx4AYzUYecS8LQlwbD/OmkqwCTQ0YC9DmBKbGjGUya2zgl3vQ4Y2B4EdgI502vj/e9i+naqWATh2R+SeuNTtrLv1wnNpKnIvs6tgM6ApYArdj7PG8mJGnPmpdJasmw7XBX2GTIxHtYbUVp7QJeFYdc7+bw28Tiu+VZpXrcw6hpAn1kTb+Oa80rzvoVR18X6jJp4G9ccU5obFkZdrfA5Z+JtXNO1Nj4fLYzqqlsy8TauWVKa31IEcsLE27jmSaW5+6+8Wu8tjG7mINmfWRh1M7bPnIm3cc17SnMhRUHcMvE2rvlOaV6xMNodaFGGTTwO67kp0qcCnLYy7rYdehpM1TTqnFy0FHCDj2bKTOCXznRA54K1iFvZ+FQtd1LS9erB6qGVfV+oT8ZPnx2Lll4GNz3qus3kGRvv/xScCBx9VSa7RpcP04GTcDwBjiQJRMRnCLMBXK7zdtKJrVkBOlsRDDIUzUt17pcGsCTfx6TY6ToRYyn1yYwHciYVy8DRlMH0BhYT9fIDeAystzQYh1vZyCugO4AYX4FHwEWx0Qms/uWZcvJgxJkutyhwM7Yk/7a0GF+AD7LqWQCuAqcCz+cnmMPiEjvQEmlWk95mTQ5mrQim2fAfnsw6cCzLO9R2mzX3/8dEJ3M7aycIB9NeQRwQTHsGoXImzZ+lBQVZlJ/po/gO7uhxQgAAAABJRU5ErkJggg=="
              ></img>
              Search
            </Link>
          </div>
        </div>
        <div className="col-md-10 spotiMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Searcher />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
