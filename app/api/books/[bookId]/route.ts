import { NextRequest, NextResponse } from "next/server";
import { books } from "../../../data/bookdata";

// PATCH 요청 처리
export async function PATCH(
  request: NextRequest,
  { params: { bookId } }: { params: { bookId: string } }
) {
  const { title } = await request.json();
  const book = books.find((book) => book.id === +bookId);

  if (!book) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  book.title = title;
  return NextResponse.json(book);
}

export async function DELETE(
  request: NextRequest,
  { params: { bookId } }: { params: { bookId: string } }
) {
  const bookIndex = books.findIndex((book) => book.id === +bookId);
  books.splice(bookIndex, 1);
  return NextResponse.json(books);
}
