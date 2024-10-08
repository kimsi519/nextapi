// /app/api/books/[bookId]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation"; // 리디렉션을 처리하기 위한 모듈
import { books } from "../../../data/bookdata"; // 도서 데이터를 가져옴

type Params = {
  params: {
    bookId: string;
  };
};

const getBook = (bookId: string) => books.find((book) => book.id === +bookId);

export async function GET(
  _request: NextRequest,
  { params: { bookId } }: Params
) {
  const book = getBook(bookId);

  if (!book) {
    return redirect("/api/books"); // return 추가
  }

  return NextResponse.json(book);
}

export const dynamic = "force-dynamic";
