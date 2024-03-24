import useProductMutation from "@/hooks/useProductMutation";
import useProductQuery from "@/hooks/useProductQuery";
import { IProduct } from "@/interfaces/product";
import { Link } from "react-router-dom";

const Product = () => {
  const { data, isLoading } = useProductQuery();
  const { mutate } = useProductMutation({
    action: "DELETE",
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Quản lý sản phẩm</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <Link to="add" className="btn btn-sm btn-primary">
                Thêm
              </Link>
            </div>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ten san pham</th>
              <th scope="col">Danh muc san pham</th>
              <th scope="col">Anh</th>
              <th scope="col">Gia san pham</th>
              <th scope="col">So luong</th>
              <th scope="col">Mo ta</th>
              <th scope="col">Chiết khấu</th>
              <th scope="col">Thao tac</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: IProduct, index: number) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td width={50}>
                  <img src={item.image} width={50} />
                </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td>{item.discount}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => mutate(item)}
                  >
                    Xóa
                  </button>
                  <Link to={`${item.id}/edit`} className="btn btn-warning">
                    Sửa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
