import { z, ZodError, ZodType, RefinementCtx } from "zod";

export function mustNotSpace(data: string, ctx: RefinementCtx): string {
    if(data.replace(/\s/g, "") !== data) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Tidak boleh menggunakan spasi!"
        });
        return z.NEVER;
    } else {
        return data;
    }
}
export function mustNoOnlySpace(data: string, ctx: RefinementCtx): string {
    if(data !== "" && data.replace(/\s/g, "") === "") {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Tidak boleh hanya spasi!"
        });
        return z.NEVER;
    } else {
        return data;
    }
}

export const nameSchema: ZodType<string> = z.string().transform(mustNoOnlySpace).refine((val) => val.length >= 4, "Minimal 4 karakter!");
export const usernameSchema: ZodType<string> = z.string().transform(mustNotSpace).refine((val) => val.length >= 4, "Minimal 4 karakter!");
export const passwordSchema: ZodType<string> = z.string().transform(mustNotSpace).refine((val) => val.length >= 8, "Minimal 8 karakter!")