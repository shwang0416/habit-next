import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  login: text("email").notNull().unique(),
  avatarUrl: text("avatar_url").notNull(),
  createdAt: integer("created_at", { mode: 'timestamp' }).notNull(),
  isPublic: integer("user_view", { mode: 'boolean' }).notNull().default(false),
});

export const habits = sqliteTable("habits", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: integer("created_at", { mode: 'timestamp' }).notNull(),
  completeDays: text("complete_days", { mode: 'json' }).$type<string[]>().notNull().default([]),
  isPublic: integer("is_public", { mode: 'boolean' }).notNull().default(false),
});