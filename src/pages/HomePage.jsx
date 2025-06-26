import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  filterByContinent,
  resetFilter,
} from "../features/countries/countriesSlice";
import { Container, Row, Col, Button } from "react-bootstrap";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";
import WelcomeSection from "../components/Welcome";
import ImageSliderSection from "../components/ImageSliderSection";
import Footer from "../components/Footer";

const CONTINENTS = ["All", "Asia", "Europe"];

export default function HomePage() {
  const dispatch = useDispatch();
  const { filtered, loading } = useSelector((state) => state.countries);
  const [visible, setVisible] = useState(10);
  const [selectedContinent, setSelectedContinent] = useState("All");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
    if (continent === "All") {
      dispatch(resetFilter());
    } else {
      dispatch(filterByContinent(continent));
    }
  };

  const handleLoadMore = () => setVisible((prev) => prev + 10);

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={11} md={10} lg={10} xl={10}>
          <Header
            continents={CONTINENTS}
            selected={selectedContinent}
            onSelect={handleContinentClick}
          />
          <WelcomeSection />
          <ImageSliderSection />

          {loading ? (
            <p>Loading...</p>
          ) : (
            <Row className="my-4">
              {filtered.slice(0, visible).map((country) => (
                <Col md={6} key={country.name} className="mb-3">
                  <CountryCard country={country} />
                </Col>
              ))}
            </Row>
          )}

          {visible < filtered.length && (
            <Button
              onClick={handleLoadMore}
              className="justify-content-center align-items-center d-flex mx-auto my-4 bg-dark text-white border-0 rounded-0"
            >
              Load More
            </Button>
          )}
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
