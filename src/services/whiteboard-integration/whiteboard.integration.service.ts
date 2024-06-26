import { Injectable } from '@nestjs/common';
import { WhiteboardIntegrationAdapterService } from './whiteboard.integration.adapter.service';
import {
  ContentModifiedInputData,
  ContributionInputData,
  InfoInputData,
  WhoInputData,
} from './inputs';

@Injectable()
export class WhiteboardIntegrationService {
  constructor(
    private readonly integrationAdapter: WhiteboardIntegrationAdapterService,
  ) {}

  public isConnected(): Promise<boolean> {
    return this.integrationAdapter.isConnected();
  }

  public who(data: WhoInputData) {
    return this.integrationAdapter.who(data);
  }

  public info(data: InfoInputData) {
    return this.integrationAdapter.info(data);
  }

  public contentModified(data: ContentModifiedInputData) {
    return this.integrationAdapter.contentModified(data);
  }

  public contribution(data: ContributionInputData) {
    return this.integrationAdapter.contribution(data);
  }
}
