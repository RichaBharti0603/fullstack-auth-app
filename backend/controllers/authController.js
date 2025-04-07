const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const loginUser = async (req, res) => {
  const { uid, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { uid },
    });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    return res.status(200).json({ message: "Login successful", uid: user.uid });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { loginUser };
