export class UpdateUserDto {
  name?: string | null;
  status?: string | null;
  password?: string | null;
  bio?: string | null;
  location?: string | null;
  website?: string | null;
  role?: string | null;
  isSuspended?: boolean | null;
  suspensionReason?: string | null;
  suspendedUntil?: Date | null;

  constructor(init?: Partial<UpdateUserDto>) {
    this.name = init?.name ?? null;
    this.status = init?.status ?? null;
    this.password = init?.password ?? null;
    this.bio = init?.bio ?? null;
    this.location = init?.location ?? null;
    this.website = init?.website ?? null;
    this.role = init?.role ?? null;
    this.isSuspended = init?.isSuspended ?? null;
    this.suspensionReason = init?.suspensionReason ?? null;
    this.suspendedUntil = init?.suspendedUntil ?? null;
  }
}
