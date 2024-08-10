export async function hashPassword(password) {
    const saltRounds = 10; // Number of salt rounds (higher = more secure but slower)
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }