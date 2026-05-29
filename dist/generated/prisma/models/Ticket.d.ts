import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type TicketModel = runtime.Types.Result.DefaultSelection<Prisma.$TicketPayload>;
export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
};
export type TicketMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.TicketStatus | null;
    priority: $Enums.TicketPriority | null;
    companyId: string | null;
    createdById: string | null;
    assignedToId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TicketMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.TicketStatus | null;
    priority: $Enums.TicketPriority | null;
    companyId: string | null;
    createdById: string | null;
    assignedToId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TicketCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    status: number;
    priority: number;
    companyId: number;
    createdById: number;
    assignedToId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TicketMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    companyId?: true;
    createdById?: true;
    assignedToId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TicketMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    companyId?: true;
    createdById?: true;
    assignedToId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TicketCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    companyId?: true;
    createdById?: true;
    assignedToId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TicketAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[];
    cursor?: Prisma.TicketWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TicketCountAggregateInputType;
    _min?: TicketMinAggregateInputType;
    _max?: TicketMaxAggregateInputType;
};
export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
    [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTicket[P]> : Prisma.GetScalarType<T[P], AggregateTicket[P]>;
};
export type TicketGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithAggregationInput | Prisma.TicketOrderByWithAggregationInput[];
    by: Prisma.TicketScalarFieldEnum[] | Prisma.TicketScalarFieldEnum;
    having?: Prisma.TicketScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TicketCountAggregateInputType | true;
    _min?: TicketMinAggregateInputType;
    _max?: TicketMaxAggregateInputType;
};
export type TicketGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    status: $Enums.TicketStatus;
    priority: $Enums.TicketPriority;
    companyId: string;
    createdById: string;
    assignedToId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TicketCountAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
};
export type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TicketGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TicketGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TicketGroupByOutputType[P]>;
}>>;
export type TicketWhereInput = {
    AND?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[];
    OR?: Prisma.TicketWhereInput[];
    NOT?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[];
    id?: Prisma.StringFilter<"Ticket"> | string;
    title?: Prisma.StringFilter<"Ticket"> | string;
    description?: Prisma.StringFilter<"Ticket"> | string;
    status?: Prisma.EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority;
    companyId?: Prisma.StringFilter<"Ticket"> | string;
    createdById?: Prisma.StringFilter<"Ticket"> | string;
    assignedToId?: Prisma.StringNullableFilter<"Ticket"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assignedTo?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    comments?: Prisma.CommentListRelationFilter;
};
export type TicketOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    company?: Prisma.CompanyOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    assignedTo?: Prisma.UserOrderByWithRelationInput;
    comments?: Prisma.CommentOrderByRelationAggregateInput;
};
export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[];
    OR?: Prisma.TicketWhereInput[];
    NOT?: Prisma.TicketWhereInput | Prisma.TicketWhereInput[];
    title?: Prisma.StringFilter<"Ticket"> | string;
    description?: Prisma.StringFilter<"Ticket"> | string;
    status?: Prisma.EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority;
    companyId?: Prisma.StringFilter<"Ticket"> | string;
    createdById?: Prisma.StringFilter<"Ticket"> | string;
    assignedToId?: Prisma.StringNullableFilter<"Ticket"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assignedTo?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    comments?: Prisma.CommentListRelationFilter;
}, "id">;
export type TicketOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TicketCountOrderByAggregateInput;
    _max?: Prisma.TicketMaxOrderByAggregateInput;
    _min?: Prisma.TicketMinOrderByAggregateInput;
};
export type TicketScalarWhereWithAggregatesInput = {
    AND?: Prisma.TicketScalarWhereWithAggregatesInput | Prisma.TicketScalarWhereWithAggregatesInput[];
    OR?: Prisma.TicketScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TicketScalarWhereWithAggregatesInput | Prisma.TicketScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    status?: Prisma.EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityWithAggregatesFilter<"Ticket"> | $Enums.TicketPriority;
    companyId?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    createdById?: Prisma.StringWithAggregatesFilter<"Ticket"> | string;
    assignedToId?: Prisma.StringNullableWithAggregatesFilter<"Ticket"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Ticket"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Ticket"> | Date | string;
};
export type TicketCreateInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutTicketsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutTicketsInput;
    assignedTo?: Prisma.UserCreateNestedOneWithoutAssignedInput;
    comments?: Prisma.CommentCreateNestedManyWithoutTicketInput;
};
export type TicketUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    companyId: string;
    createdById: string;
    assignedToId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutTicketInput;
};
export type TicketUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutTicketsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutTicketsNestedInput;
    assignedTo?: Prisma.UserUpdateOneWithoutAssignedNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutTicketNestedInput;
};
export type TicketUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutTicketNestedInput;
};
export type TicketCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    companyId: string;
    createdById: string;
    assignedToId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TicketUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketListRelationFilter = {
    every?: Prisma.TicketWhereInput;
    some?: Prisma.TicketWhereInput;
    none?: Prisma.TicketWhereInput;
};
export type TicketOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TicketCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TicketMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TicketMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TicketScalarRelationFilter = {
    is?: Prisma.TicketWhereInput;
    isNot?: Prisma.TicketWhereInput;
};
export type TicketCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutCompanyInput, Prisma.TicketUncheckedCreateWithoutCompanyInput> | Prisma.TicketCreateWithoutCompanyInput[] | Prisma.TicketUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutCompanyInput | Prisma.TicketCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.TicketCreateManyCompanyInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutCompanyInput, Prisma.TicketUncheckedCreateWithoutCompanyInput> | Prisma.TicketCreateWithoutCompanyInput[] | Prisma.TicketUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutCompanyInput | Prisma.TicketCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.TicketCreateManyCompanyInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutCompanyInput, Prisma.TicketUncheckedCreateWithoutCompanyInput> | Prisma.TicketCreateWithoutCompanyInput[] | Prisma.TicketUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutCompanyInput | Prisma.TicketCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutCompanyInput | Prisma.TicketUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.TicketCreateManyCompanyInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutCompanyInput | Prisma.TicketUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutCompanyInput | Prisma.TicketUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutCompanyInput, Prisma.TicketUncheckedCreateWithoutCompanyInput> | Prisma.TicketCreateWithoutCompanyInput[] | Prisma.TicketUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutCompanyInput | Prisma.TicketCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutCompanyInput | Prisma.TicketUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.TicketCreateManyCompanyInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutCompanyInput | Prisma.TicketUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutCompanyInput | Prisma.TicketUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutCreatedByInput, Prisma.TicketUncheckedCreateWithoutCreatedByInput> | Prisma.TicketCreateWithoutCreatedByInput[] | Prisma.TicketUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutCreatedByInput | Prisma.TicketCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.TicketCreateManyCreatedByInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketCreateNestedManyWithoutAssignedToInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutAssignedToInput, Prisma.TicketUncheckedCreateWithoutAssignedToInput> | Prisma.TicketCreateWithoutAssignedToInput[] | Prisma.TicketUncheckedCreateWithoutAssignedToInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutAssignedToInput | Prisma.TicketCreateOrConnectWithoutAssignedToInput[];
    createMany?: Prisma.TicketCreateManyAssignedToInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutCreatedByInput, Prisma.TicketUncheckedCreateWithoutCreatedByInput> | Prisma.TicketCreateWithoutCreatedByInput[] | Prisma.TicketUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutCreatedByInput | Prisma.TicketCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.TicketCreateManyCreatedByInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutAssignedToInput, Prisma.TicketUncheckedCreateWithoutAssignedToInput> | Prisma.TicketCreateWithoutAssignedToInput[] | Prisma.TicketUncheckedCreateWithoutAssignedToInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutAssignedToInput | Prisma.TicketCreateOrConnectWithoutAssignedToInput[];
    createMany?: Prisma.TicketCreateManyAssignedToInputEnvelope;
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
};
export type TicketUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutCreatedByInput, Prisma.TicketUncheckedCreateWithoutCreatedByInput> | Prisma.TicketCreateWithoutCreatedByInput[] | Prisma.TicketUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutCreatedByInput | Prisma.TicketCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.TicketUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.TicketCreateManyCreatedByInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.TicketUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutCreatedByInput | Prisma.TicketUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketUpdateManyWithoutAssignedToNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutAssignedToInput, Prisma.TicketUncheckedCreateWithoutAssignedToInput> | Prisma.TicketCreateWithoutAssignedToInput[] | Prisma.TicketUncheckedCreateWithoutAssignedToInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutAssignedToInput | Prisma.TicketCreateOrConnectWithoutAssignedToInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutAssignedToInput | Prisma.TicketUpsertWithWhereUniqueWithoutAssignedToInput[];
    createMany?: Prisma.TicketCreateManyAssignedToInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutAssignedToInput | Prisma.TicketUpdateWithWhereUniqueWithoutAssignedToInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutAssignedToInput | Prisma.TicketUpdateManyWithWhereWithoutAssignedToInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutCreatedByInput, Prisma.TicketUncheckedCreateWithoutCreatedByInput> | Prisma.TicketCreateWithoutCreatedByInput[] | Prisma.TicketUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutCreatedByInput | Prisma.TicketCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.TicketUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.TicketCreateManyCreatedByInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.TicketUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutCreatedByInput | Prisma.TicketUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type TicketUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutAssignedToInput, Prisma.TicketUncheckedCreateWithoutAssignedToInput> | Prisma.TicketCreateWithoutAssignedToInput[] | Prisma.TicketUncheckedCreateWithoutAssignedToInput[];
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutAssignedToInput | Prisma.TicketCreateOrConnectWithoutAssignedToInput[];
    upsert?: Prisma.TicketUpsertWithWhereUniqueWithoutAssignedToInput | Prisma.TicketUpsertWithWhereUniqueWithoutAssignedToInput[];
    createMany?: Prisma.TicketCreateManyAssignedToInputEnvelope;
    set?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    disconnect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    delete?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    connect?: Prisma.TicketWhereUniqueInput | Prisma.TicketWhereUniqueInput[];
    update?: Prisma.TicketUpdateWithWhereUniqueWithoutAssignedToInput | Prisma.TicketUpdateWithWhereUniqueWithoutAssignedToInput[];
    updateMany?: Prisma.TicketUpdateManyWithWhereWithoutAssignedToInput | Prisma.TicketUpdateManyWithWhereWithoutAssignedToInput[];
    deleteMany?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
};
export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus;
};
export type EnumTicketPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TicketPriority;
};
export type TicketCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutCommentsInput, Prisma.TicketUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.TicketWhereUniqueInput;
};
export type TicketUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.TicketCreateWithoutCommentsInput, Prisma.TicketUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.TicketCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.TicketUpsertWithoutCommentsInput;
    connect?: Prisma.TicketWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TicketUpdateToOneWithWhereWithoutCommentsInput, Prisma.TicketUpdateWithoutCommentsInput>, Prisma.TicketUncheckedUpdateWithoutCommentsInput>;
};
export type TicketCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutTicketsInput;
    assignedTo?: Prisma.UserCreateNestedOneWithoutAssignedInput;
    comments?: Prisma.CommentCreateNestedManyWithoutTicketInput;
};
export type TicketUncheckedCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    createdById: string;
    assignedToId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutTicketInput;
};
export type TicketCreateOrConnectWithoutCompanyInput = {
    where: Prisma.TicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketCreateWithoutCompanyInput, Prisma.TicketUncheckedCreateWithoutCompanyInput>;
};
export type TicketCreateManyCompanyInputEnvelope = {
    data: Prisma.TicketCreateManyCompanyInput | Prisma.TicketCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type TicketUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.TicketWhereUniqueInput;
    update: Prisma.XOR<Prisma.TicketUpdateWithoutCompanyInput, Prisma.TicketUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.TicketCreateWithoutCompanyInput, Prisma.TicketUncheckedCreateWithoutCompanyInput>;
};
export type TicketUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.TicketWhereUniqueInput;
    data: Prisma.XOR<Prisma.TicketUpdateWithoutCompanyInput, Prisma.TicketUncheckedUpdateWithoutCompanyInput>;
};
export type TicketUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.TicketScalarWhereInput;
    data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyWithoutCompanyInput>;
};
export type TicketScalarWhereInput = {
    AND?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
    OR?: Prisma.TicketScalarWhereInput[];
    NOT?: Prisma.TicketScalarWhereInput | Prisma.TicketScalarWhereInput[];
    id?: Prisma.StringFilter<"Ticket"> | string;
    title?: Prisma.StringFilter<"Ticket"> | string;
    description?: Prisma.StringFilter<"Ticket"> | string;
    status?: Prisma.EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority;
    companyId?: Prisma.StringFilter<"Ticket"> | string;
    createdById?: Prisma.StringFilter<"Ticket"> | string;
    assignedToId?: Prisma.StringNullableFilter<"Ticket"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ticket"> | Date | string;
};
export type TicketCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutTicketsInput;
    assignedTo?: Prisma.UserCreateNestedOneWithoutAssignedInput;
    comments?: Prisma.CommentCreateNestedManyWithoutTicketInput;
};
export type TicketUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    companyId: string;
    assignedToId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutTicketInput;
};
export type TicketCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.TicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketCreateWithoutCreatedByInput, Prisma.TicketUncheckedCreateWithoutCreatedByInput>;
};
export type TicketCreateManyCreatedByInputEnvelope = {
    data: Prisma.TicketCreateManyCreatedByInput | Prisma.TicketCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type TicketCreateWithoutAssignedToInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutTicketsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutTicketsInput;
    comments?: Prisma.CommentCreateNestedManyWithoutTicketInput;
};
export type TicketUncheckedCreateWithoutAssignedToInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    companyId: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutTicketInput;
};
export type TicketCreateOrConnectWithoutAssignedToInput = {
    where: Prisma.TicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketCreateWithoutAssignedToInput, Prisma.TicketUncheckedCreateWithoutAssignedToInput>;
};
export type TicketCreateManyAssignedToInputEnvelope = {
    data: Prisma.TicketCreateManyAssignedToInput | Prisma.TicketCreateManyAssignedToInput[];
    skipDuplicates?: boolean;
};
export type TicketUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.TicketWhereUniqueInput;
    update: Prisma.XOR<Prisma.TicketUpdateWithoutCreatedByInput, Prisma.TicketUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.TicketCreateWithoutCreatedByInput, Prisma.TicketUncheckedCreateWithoutCreatedByInput>;
};
export type TicketUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.TicketWhereUniqueInput;
    data: Prisma.XOR<Prisma.TicketUpdateWithoutCreatedByInput, Prisma.TicketUncheckedUpdateWithoutCreatedByInput>;
};
export type TicketUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.TicketScalarWhereInput;
    data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyWithoutCreatedByInput>;
};
export type TicketUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: Prisma.TicketWhereUniqueInput;
    update: Prisma.XOR<Prisma.TicketUpdateWithoutAssignedToInput, Prisma.TicketUncheckedUpdateWithoutAssignedToInput>;
    create: Prisma.XOR<Prisma.TicketCreateWithoutAssignedToInput, Prisma.TicketUncheckedCreateWithoutAssignedToInput>;
};
export type TicketUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: Prisma.TicketWhereUniqueInput;
    data: Prisma.XOR<Prisma.TicketUpdateWithoutAssignedToInput, Prisma.TicketUncheckedUpdateWithoutAssignedToInput>;
};
export type TicketUpdateManyWithWhereWithoutAssignedToInput = {
    where: Prisma.TicketScalarWhereInput;
    data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyWithoutAssignedToInput>;
};
export type TicketCreateWithoutCommentsInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutTicketsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutTicketsInput;
    assignedTo?: Prisma.UserCreateNestedOneWithoutAssignedInput;
};
export type TicketUncheckedCreateWithoutCommentsInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    companyId: string;
    createdById: string;
    assignedToId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TicketCreateOrConnectWithoutCommentsInput = {
    where: Prisma.TicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketCreateWithoutCommentsInput, Prisma.TicketUncheckedCreateWithoutCommentsInput>;
};
export type TicketUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.TicketUpdateWithoutCommentsInput, Prisma.TicketUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.TicketCreateWithoutCommentsInput, Prisma.TicketUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.TicketWhereInput;
};
export type TicketUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.TicketWhereInput;
    data: Prisma.XOR<Prisma.TicketUpdateWithoutCommentsInput, Prisma.TicketUncheckedUpdateWithoutCommentsInput>;
};
export type TicketUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutTicketsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutTicketsNestedInput;
    assignedTo?: Prisma.UserUpdateOneWithoutAssignedNestedInput;
};
export type TicketUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketCreateManyCompanyInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    createdById: string;
    assignedToId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TicketUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutTicketsNestedInput;
    assignedTo?: Prisma.UserUpdateOneWithoutAssignedNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutTicketNestedInput;
};
export type TicketUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutTicketNestedInput;
};
export type TicketUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketCreateManyCreatedByInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    companyId: string;
    assignedToId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TicketCreateManyAssignedToInput = {
    id?: string;
    title: string;
    description: string;
    status?: $Enums.TicketStatus;
    priority?: $Enums.TicketPriority;
    companyId: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TicketUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutTicketsNestedInput;
    assignedTo?: Prisma.UserUpdateOneWithoutAssignedNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutTicketNestedInput;
};
export type TicketUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutTicketNestedInput;
};
export type TicketUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketUpdateWithoutAssignedToInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutTicketsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutTicketsNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutTicketNestedInput;
};
export type TicketUncheckedUpdateWithoutAssignedToInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutTicketNestedInput;
};
export type TicketUncheckedUpdateManyWithoutAssignedToInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus;
    priority?: Prisma.EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketCountOutputType = {
    comments: number;
};
export type TicketCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | TicketCountOutputTypeCountCommentsArgs;
};
export type TicketCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketCountOutputTypeSelect<ExtArgs> | null;
};
export type TicketCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
export type TicketSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    companyId?: boolean;
    createdById?: boolean;
    assignedToId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.Ticket$assignedToArgs<ExtArgs>;
    comments?: boolean | Prisma.Ticket$commentsArgs<ExtArgs>;
    _count?: boolean | Prisma.TicketCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ticket"]>;
export type TicketSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    companyId?: boolean;
    createdById?: boolean;
    assignedToId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.Ticket$assignedToArgs<ExtArgs>;
}, ExtArgs["result"]["ticket"]>;
export type TicketSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    companyId?: boolean;
    createdById?: boolean;
    assignedToId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.Ticket$assignedToArgs<ExtArgs>;
}, ExtArgs["result"]["ticket"]>;
export type TicketSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    companyId?: boolean;
    createdById?: boolean;
    assignedToId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TicketOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "companyId" | "createdById" | "assignedToId" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>;
export type TicketInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.Ticket$assignedToArgs<ExtArgs>;
    comments?: boolean | Prisma.Ticket$commentsArgs<ExtArgs>;
    _count?: boolean | Prisma.TicketCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TicketIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.Ticket$assignedToArgs<ExtArgs>;
};
export type TicketIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assignedTo?: boolean | Prisma.Ticket$assignedToArgs<ExtArgs>;
};
export type $TicketPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Ticket";
    objects: {
        company: Prisma.$CompanyPayload<ExtArgs>;
        createdBy: Prisma.$UserPayload<ExtArgs>;
        assignedTo: Prisma.$UserPayload<ExtArgs> | null;
        comments: Prisma.$CommentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        status: $Enums.TicketStatus;
        priority: $Enums.TicketPriority;
        companyId: string;
        createdById: string;
        assignedToId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["ticket"]>;
    composites: {};
};
export type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TicketPayload, S>;
export type TicketCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TicketCountAggregateInputType | true;
};
export interface TicketDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Ticket'];
        meta: {
            name: 'Ticket';
        };
    };
    findUnique<T extends TicketFindUniqueArgs>(args: Prisma.SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TicketFindFirstArgs>(args?: Prisma.SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TicketFindManyArgs>(args?: Prisma.SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TicketCreateArgs>(args: Prisma.SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TicketCreateManyArgs>(args?: Prisma.SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TicketDeleteArgs>(args: Prisma.SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TicketUpdateArgs>(args: Prisma.SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TicketDeleteManyArgs>(args?: Prisma.SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TicketUpdateManyArgs>(args: Prisma.SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TicketUpsertArgs>(args: Prisma.SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma.Prisma__TicketClient<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TicketCountArgs>(args?: Prisma.Subset<T, TicketCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TicketCountAggregateOutputType> : number>;
    aggregate<T extends TicketAggregateArgs>(args: Prisma.Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>;
    groupBy<T extends TicketGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TicketGroupByArgs['orderBy'];
    } : {
        orderBy?: TicketGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TicketFieldRefs;
}
export interface Prisma__TicketClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assignedTo<T extends Prisma.Ticket$assignedToArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ticket$assignedToArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    comments<T extends Prisma.Ticket$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ticket$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TicketFieldRefs {
    readonly id: Prisma.FieldRef<"Ticket", 'String'>;
    readonly title: Prisma.FieldRef<"Ticket", 'String'>;
    readonly description: Prisma.FieldRef<"Ticket", 'String'>;
    readonly status: Prisma.FieldRef<"Ticket", 'TicketStatus'>;
    readonly priority: Prisma.FieldRef<"Ticket", 'TicketPriority'>;
    readonly companyId: Prisma.FieldRef<"Ticket", 'String'>;
    readonly createdById: Prisma.FieldRef<"Ticket", 'String'>;
    readonly assignedToId: Prisma.FieldRef<"Ticket", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Ticket", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Ticket", 'DateTime'>;
}
export type TicketFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where: Prisma.TicketWhereUniqueInput;
};
export type TicketFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where: Prisma.TicketWhereUniqueInput;
};
export type TicketFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[];
    cursor?: Prisma.TicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
export type TicketFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[];
    cursor?: Prisma.TicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
export type TicketFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[];
    cursor?: Prisma.TicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
export type TicketCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TicketCreateInput, Prisma.TicketUncheckedCreateInput>;
};
export type TicketCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TicketCreateManyInput | Prisma.TicketCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TicketCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    data: Prisma.TicketCreateManyInput | Prisma.TicketCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TicketIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TicketUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TicketUpdateInput, Prisma.TicketUncheckedUpdateInput>;
    where: Prisma.TicketWhereUniqueInput;
};
export type TicketUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyInput>;
    where?: Prisma.TicketWhereInput;
    limit?: number;
};
export type TicketUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TicketUpdateManyMutationInput, Prisma.TicketUncheckedUpdateManyInput>;
    where?: Prisma.TicketWhereInput;
    limit?: number;
    include?: Prisma.TicketIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TicketUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where: Prisma.TicketWhereUniqueInput;
    create: Prisma.XOR<Prisma.TicketCreateInput, Prisma.TicketUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TicketUpdateInput, Prisma.TicketUncheckedUpdateInput>;
};
export type TicketDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where: Prisma.TicketWhereUniqueInput;
};
export type TicketDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
    limit?: number;
};
export type Ticket$assignedToArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Ticket$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentSelect<ExtArgs> | null;
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    include?: Prisma.CommentInclude<ExtArgs> | null;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    cursor?: Prisma.CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
export type TicketDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TicketSelect<ExtArgs> | null;
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    include?: Prisma.TicketInclude<ExtArgs> | null;
};
