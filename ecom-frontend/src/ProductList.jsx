const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-6 col-lg-4 col-sm-12 mb-4" key={product.id}>
          <div className="card mb-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <strong>${product.price}</strong>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
