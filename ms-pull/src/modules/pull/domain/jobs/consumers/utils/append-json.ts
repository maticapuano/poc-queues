import { existsSync, readFileSync, writeFileSync } from "fs";
import { EventType } from "../../../enums/event-type.enum";

export const appendJson = async (
  type: EventType,
  data: string
): Promise<void> => {
  const fileName = `${type}.json`;

  if (!existsSync(fileName)) {
    await writeFileSync(fileName, JSON.stringify(data, null, 2));
  }

  const tokenizationFromFile = JSON.parse(
    readFileSync(fileName).toString("utf-8")
  );

  tokenizationFromFile.push(...data);

  await writeFileSync(fileName, JSON.stringify(tokenizationFromFile, null, 2));
};
