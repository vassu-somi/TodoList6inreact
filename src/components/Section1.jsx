import { ListGroup } from "react-bootstrap";

function Section1(props) {
  return (
    <ListGroup>
      {props.products.map((product) => {
        return (
          <ListGroup.Item
            key={product.name}
            onClick={() => {
              props.setSelectedProduct(product);
              props.setShowImage(false);
            }}
          >
            {product.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Section1;
