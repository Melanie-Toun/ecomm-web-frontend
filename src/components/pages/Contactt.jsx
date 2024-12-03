// Contact.jsx
import React from "react";

const Contactt = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>

      <section style={styles.section}>
        <p style={styles.text}>
          Have questions? We’d love to hear from you! Reach out to us using the
          form below or connect with us on social media.
        </p>
      </section>

      <section style={styles.formSection}>
        <form style={styles.form}>
          <label style={styles.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            style={styles.input}
            required
          />

          <label style={styles.label} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            style={styles.input}
            required
          />

          <label style={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            style={styles.textarea}
            required
          ></textarea>

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </section>

      <section style={styles.contactInfo}>
        <h2 style={styles.subheading}>Get in Touch</h2>
        <p style={styles.text}>Email: contact@ourcompany.com</p>
        <p style={styles.text}>Phone: +123-456-7890</p>
        <div style={styles.socials}>
          <a
            href="https://facebook.com"
            style={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            style={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            style={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  section: {
    margin: "20px 0",
  },
  formSection: {
    marginBottom: "40px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    fontSize: "1em",
    marginBottom: "5px",
    textAlign: "left",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1em",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  contactInfo: {
    marginTop: "20px",
  },
  subheading: {
    fontSize: "1.5em",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1em",
    lineHeight: "1.6",
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  socialLink: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default Contactt;