import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import Pagination from "../utility/Pagination";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import GetReviewHook from "../../hook/review/Get_Review_Hook";

const RateContainer = ({ quantity, avarage }) => {
  const [review, onPress] = GetReviewHook();

  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقييمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{avarage}</div>

          <div className="rate-count d-inline p-1 pt-2">
            {quantity > 10 ? `(${quantity} تقييم)` : `(${quantity} تقييمات)`}
          </div>
        </Col>
      </Row>
      <RatePost />

      {review?.data?.map((e, i) => {
        return <RateItem review={e} key={i} />;
      })}

      {/* view Paginationonly if number of page was more than 1 */}
      {review.paginationResult?.numberOfPages >= 2 ? (
        <Pagination
          pageCount={review ? review.paginationResult.numberOfPages : 0}
          onPress={onPress}
        />
      ) : null}
    </Container>
  );
};

export default RateContainer;
