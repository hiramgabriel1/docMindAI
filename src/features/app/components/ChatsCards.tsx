import {
  DataList,
  Badge,
  Flex,
  Code,
  IconButton,
  Button,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IDataChats {
  id: string;
  title: string;
  description: string;
  newChatId: string;
  urlPdf: string;
  chatContext: string | null;
  createdAt: Date;
  userId: string;
}

interface ChatsCardsProps {
  dataChats: IDataChats[];
}

function ChatsCards({ dataChats }: ChatsCardsProps) {
  const [chats, setChats] = useState<IDataChats[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (dataChats) setChats(dataChats);
  }, [dataChats]);

  return (
    <div className="flex flex-col space-y-4">
      {chats.map((result, index) => (
        <div
          className="flex flex-col p-4 border border-gray-200 rounded-lg"
          key={index}
        >
          <DataList.Root>
            <DataList.Item className="flex items-center justify-between">
              <DataList.Label minWidth="88px">{index + 1}</DataList.Label>
              <DataList.Value className="flex items-center gap-2">
                <Badge color="jade" variant="soft" radius="full">
                  Authorized
                </Badge>
                <Button
                  onClick={() =>
                    navigate(`/user/${result.userId}/view-chat/${result.id}`)
                  }
                >
                  Open chat
                </Button>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">ID</DataList.Label>
              <DataList.Value>
                <Flex align="center" gap="2">
                  <Code variant="ghost">{result.id}</Code>
                  <IconButton
                    size="1"
                    aria-label="Copy value"
                    color="gray"
                    variant="ghost"
                  />
                </Flex>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Title</DataList.Label>
              <DataList.Value>{result.title}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Description</DataList.Label>
              <DataList.Value>{result.description}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Filename</DataList.Label>
              <DataList.Value>{result.urlPdf}</DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </div>
      ))}
    </div>
  );
}

export default ChatsCards;
