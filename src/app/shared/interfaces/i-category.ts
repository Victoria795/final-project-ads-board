import { TreeNode } from "primeng/api";

export interface ICategory {
    id: string,
    parentId: string,
    name: string,
    isActive: boolean,
    createdAt: string,
    child: ICategory[];
}
