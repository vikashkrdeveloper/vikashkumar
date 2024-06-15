import { Card, Skeleton } from "@nextui-org/react";

export default function CardSkeleton() {
    return (
        <Card className="w-[350px] h-[260px] space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-1/2 rounded-lg">
                    <div className="h-10 w-full rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </Card>
    );
}
