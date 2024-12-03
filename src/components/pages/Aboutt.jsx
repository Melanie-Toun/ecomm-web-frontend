// About.jsx
import React from "react";

const Aboutt = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      <section style={styles.section}>
        <p style={styles.text}>
          Welcome to our website! We are a team of passionate individuals
          dedicated to delivering top-quality services and products to our
          customers. Our mission is to provide innovative solutions that make a
          difference in people’s lives.
        </p>
        <img
          src="https://via.placeholder.com/300"
          alt="Our team"
          style={styles.image}
        />
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Our Story</h2>
        <p style={styles.text}>
          Since our founding, we have been committed to our core values of
          integrity, excellence, and customer satisfaction. Our journey started
          with a small idea that grew into a big dream. Today, we’re proud to
          serve clients from all over the world.
        </p>
        <img
          src="https://via.placeholder.com/300"
          alt="Our story"
          style={styles.image}
        />
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Our Team</h2>
        <p style={styles.text}>
          We believe in the power of collaboration and teamwork. Our team is
          made up of talented professionals from diverse backgrounds, each
          bringing unique skills and perspectives to the table.
        </p>
        <img
          src="https://via.placeholder.com/300"
          alt="Our team members"
          style={styles.image}
        />
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2em",
    marginBottom: "10px",
  },
  section: {
    margin: "20px 0",
    textAlign: "center",
  },
  subheading: {
    fontSize: "1.5em",
    margin: "10px 0",
  },
  text: {
    fontSize: "1em",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  },
};

export default Aboutt;