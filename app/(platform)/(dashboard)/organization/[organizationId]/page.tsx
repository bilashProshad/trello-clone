import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

export default async function OrganizationIdPage() {
  const boards = await prisma.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <form>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter a board title"
          required
          className="border-black border p-1"
        />
        <Button type="submit">Submit</Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <div key={board.id}>Board title: {board.title}</div>
        ))}
      </div>
    </div>
  );
}
