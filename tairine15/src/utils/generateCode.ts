import { randomBytes } from "crypto";

export function generateInvitationCode(prefix = "TAIRINE"): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = randomBytes(5);
  let suffix = "";
  for (let i = 0; i < 5; i++) {
    suffix += alphabet[bytes[i] % alphabet.length];
  }
  return `${prefix}-${suffix}`;
}
