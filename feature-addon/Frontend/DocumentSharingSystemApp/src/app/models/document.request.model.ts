import { DocumentModel } from "./document.model";
import { UserModel } from "./user.model";

export class DocumentRestoreRequestModel {
  constructor(
    public id: string = '',
    public documentId: string = '',
    public document: DocumentModel | null = null,
    public originalFileName:string='',

    public requestedByUserId: string = '',
        public requestedByUserName: string = '',

    public requestedByUser: UserModel | null = null,

    public requestedAt: Date = new Date(),
    public reason: string = '',

    public status: string = '',

    public reviewedAt: Date | null = null,
    public reviewedByUserId: string | null = null,
        public reviewedByUserName: string | null = null,

    public reviewedByUser: UserModel | null = null,
    public  isAdminRead :boolean=false,
    public  IsUserRead :boolean = false
  ) {}

  static fromData(data: any): DocumentRestoreRequestModel {
    return new DocumentRestoreRequestModel(
      data.id,
      data.documentId,
      data.document ? DocumentModel.fromData(data.document) : null,
      data.OriginalFileName,

      data.requestedByUserId,
      data.requestedByUserName,
      data.requestedByUser ? UserModel.fromData(data.requestedByUser) : null,

      data.requestedAt ? new Date(data.requestedAt) : new Date(),
      data.reason,

      data.status,

      data.reviewedAt ? new Date(data.reviewedAt) : null,
      data.reviewedByUserId ?? null,
      data.reviewedByUserName,
      data.reviewedByUser ? UserModel.fromData(data.reviewedByUser) : null,
      data.isAdminRead,
      data.IsUserRead
    );
  }
}
