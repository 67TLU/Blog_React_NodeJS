import { describe, it, expect } from "vitest";
import { loginSchema, signUpSchema } from "./validate";

describe("loginSchema", () => {
  it("chấp nhận email hợp lệ + password >= 6 ký tự", () => {
    const result = loginSchema.safeParse({
      email: "user@example.com",
      password: "secret123",
    });
    expect(result.success).toBe(true);
  });

  it("báo lỗi khi email sai định dạng", () => {
    const result = loginSchema.safeParse({
      email: "not-an-email",
      password: "secret123",
    });
    expect(result.success).toBe(false);
  });

  it("báo lỗi khi password ngắn hơn 6 ký tự", () => {
    const result = loginSchema.safeParse({
      email: "user@example.com",
      password: "123",
    });
    expect(result.success).toBe(false);
  });

  it("báo lỗi khi password rỗng", () => {
    const result = loginSchema.safeParse({ email: "a@b.com", password: "" });
    expect(result.success).toBe(false);
  });
});

describe("signUpSchema", () => {
  it("chấp nhận dữ liệu hợp lệ", () => {
    const result = signUpSchema.safeParse({
      username: "nguoidung",
      email: "user@example.com",
      password: "secret123",
    });
    expect(result.success).toBe(true);
  });

  it("báo lỗi khi username < 3 ký tự", () => {
    const result = signUpSchema.safeParse({
      username: "ab",
      email: "user@example.com",
      password: "secret123",
    });
    expect(result.success).toBe(false);
  });

  it("báo lỗi khi thiếu trường", () => {
    const result = signUpSchema.safeParse({ username: "nguoidung" });
    expect(result.success).toBe(false);
  });
});
