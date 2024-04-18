import { z, ZodError, ZodType, RefinementCtx } from "zod";

export function mustNotSpace(data: string, ctx: RefinementCtx): string {
    if(data.replace(/\s/g, "") !== data) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Tidak boleh menggunakan spasi"
        });
        return z.NEVER;
    } else {
        return data;
    }
}
export function mustNoOnlySpace(data: string, ctx: RefinementCtx): string {
    if(data.replace(/\s/g, "") === "") {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Tidak boleh hanya spasi"
        });
        return z.NEVER;
    } else {
        return data;
    }
}

export const nameSchema: ZodType<string> = z.string().min(4).max(25).transform(mustNoOnlySpace);
export const usernameSchema: ZodType<string> = z.string().min(4).max(25).transform(mustNotSpace);
export const passwordSchema: ZodType<string> = z.string().min(8).max(16).transform(mustNotSpace);