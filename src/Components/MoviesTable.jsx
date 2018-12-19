import React, { Component } from "react";
import Like from "./common/Like";
import TableHeader from "./common/TableHeader";
import TableBody from "./common/TableBody";

class MovieTable extends Component {
  // this will not be changed so does not have to be state
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like",
      content: m => (  
          <Like 
            liked={m.liked} 
            onLikeClick={() => this.props.onLike(m)} />
     )
    },
    { key: "delete",
      content: m => (
        <button
          onClick={() => this.props.onDelete(m._id)}
          className="btn btn-danger btn-sm"
        >
          delete
        </button>
      )
    }
  ];

  render() {
    const {
      movies,
      onSort,
      sortOrder,
      sortColumn
    } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
          sortOrder={sortOrder}
        />
        <TableBody 
            data={movies} 
            columns={this.columns} />
      </table>
    );
  }
}

export default MovieTable;

// <tbody>
// {movies.map(movie => (
//   <tr key={movie.title}>
//     <td>{movie.title}</td>
//     <td>{movie.genre.name}</td>
//     <td>{movie.numberInStock}</td>
//     <td>{movie.dailyRentalRate}</td>
//     <td>
//       <Like liked={movie.liked} onLikeClick={() => onLike(movie)} />
//     </td>
//     <td>
//   <button
//     onClick={() => onDelete(movie._id)}
//     className="btn btn-danger btn-sm"
//   >
//     delete
//   </button>
//     </td>
//   </tr>
// ))}
// </tbody>