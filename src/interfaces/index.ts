type PistacheJsonMetadata = {
  web3FunctionVersion: number;
  runtime: number;
  memory: number;
  timeout: number;
  userArgs?: any;
};

export type PistacheWeb3function = {
  sourcecode: string;
  jsonmetadata?: PistacheJsonMetadata;
  secrets?: string[];
};
