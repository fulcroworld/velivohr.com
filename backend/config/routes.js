/**
 * import the needful
 */
import submitContactForm from "./functions.js";

/**
 *
 * @param {*} fastify
 * @param {*} options
 */
const routes = async (fastify, options) => {
  /**
   * submit contact form
   */
  fastify.post("/submit-contact-form", async (req, res) => {
    try {
      // if (req.method !== "POST") {
      //   res.setHeader("Allow", "POST");
      //   return res.status(405).json({ ok: false, error: "Method not allowed" });
      // }

      let formData = req.body;

      if (!formData || typeof formData === "string") {
        try {
          formData = JSON.parse(formData || "{}");
        } catch (e) {
          formData = {};
        }
      }

      const { code, details } = await submitContactForm(formData);

      res.code(code).send(details);
    } catch (error) {
      res.code(500).send({
        message: "Failed to submit the contact form.",
        error: JSON.stringify(error),
      });
    }
  });
};

export default routes;
