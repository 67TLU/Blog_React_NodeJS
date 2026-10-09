import{o as e}from"./rolldown-runtime-C0FnF6B9.js";import{An as t,At as n,Bn as r,Dn as i,Fn as a,H as o,It as s,L as c,On as l,St as u,Ut as d,Vn as f,cn as p,ei as m,gt as h,jn as g,kn as _,ln as v,mn as y,rt as b,wn as x,wt as S,yn as C}from"./vendor-BwsjGJsh.js";import{B as w,a as T,c as E,d as D,f as O,i as k,l as A,n as j,o as M,p as N,r as P,s as F,t as I,u as L,z as R}from"./vendor-react-Duk93Fi-.js";import{l as z,n as B}from"./vendor-router-CsAWdPbK.js";import{t as V}from"./utils-BbH3Na_e.js";import{a as ee,c as te,d as H,i as ne,l as re,o as ie,r as U,s as ae,u as W}from"./index-iHIEJJAZ.js";import{n as G,r as K,t as q}from"./avatar-7tA0hps8.js";import{t as oe}from"./PublicLayout-VDxI9vAJ.js";import{t as J}from"./badge-BzK0fkax.js";import{t as se}from"./ArticleCard-Cw6uexNX.js";import{t as Y}from"./mockArticles-C1fOzoB5.js";import{t as X}from"./textarea-BVpS4QOl.js";import ce from"./NotFoundPage-C34vgrEH.js";var Z=e(m(),1);function le(e,t=new Date().toISOString()){let n=new Date(e),r=new Date(t);if(Number.isNaN(n.getTime()))return typeof e==`string`?e:``;let i=n-r,a=Math.abs(i),o=[{name:`year`,value:31536e6},{name:`month`,value:2628e6},{name:`day`,value:864e5},{name:`hour`,value:36e5},{name:`minute`,value:6e4},{name:`second`,value:1e3}];if(a<1e4)return i>=0?`vài giây nữa`:`vài giây trước`;let s=new Intl.RelativeTimeFormat(`vi`,{numeric:`always`});for(let e of o)if(a>=e.value||e.name===`second`){let t=Math.round(i/e.value);return s.format(t,e.name)}}function ue(e){let t=Number(e)||0;return t>=1e6?`${(t/1e6).toFixed(1).replace(/\.0$/,``)}tr`:t>=1e3?`${(t/1e3).toFixed(1).replace(/\.0$/,``)}k`:String(t)}var Q=R();function de({value:e,onChange:t,onSubmit:n}){return(0,Q.jsxs)(`form`,{onSubmit:n,className:`\r
        space-y-3\r
        rounded-xl\r
        border\r
        border-border\r
        bg-card\r
        p-4\r
        shadow-sm\r
      `,children:[(0,Q.jsx)(X,{value:e,onChange:e=>t(e.target.value),placeholder:`Chia sẻ ý kiến của bạn về bài viết này...`,className:`\r
          min-h-[100px]\r
          resize-none\r
          border-input\r
          bg-background\r
          text-foreground\r
          placeholder:text-muted-foreground\r
          focus-visible:ring-1\r
          focus-visible:ring-ring\r
        `}),(0,Q.jsx)(`div`,{className:`flex justify-end`,children:(0,Q.jsxs)(W,{type:`submit`,disabled:!e.trim(),className:`gap-2`,children:[(0,Q.jsx)(S,{className:`h-4 w-4`}),`Gửi bình luận`]})})]})}function fe({filter:e,onChange:t}){return(0,Q.jsxs)(`div`,{className:`\r
        flex\r
        w-fit\r
        gap-1\r
        rounded-lg\r
        border\r
        border-border\r
        bg-muted/50\r
        p-1\r
      `,children:[(0,Q.jsx)(`button`,{type:`button`,onClick:()=>t(`NEWEST`),className:`
          rounded-md
          px-3
          py-1.5
          text-xs
          font-medium
          transition-all
          ${e===`NEWEST`?`bg-background text-foreground shadow-sm`:`text-muted-foreground hover:text-foreground`}
        `,children:`Mới nhất`}),(0,Q.jsx)(`button`,{type:`button`,onClick:()=>t(`MOST_LIKED`),className:`
          rounded-md
          px-3
          py-1.5
          text-xs
          font-medium
          transition-all
          ${e===`MOST_LIKED`?`bg-background text-foreground shadow-sm`:`text-muted-foreground hover:text-foreground`}
        `,children:`Nhiều like nhất`})]})}function pe({reply:e,parentComment:t,liked:r,onLike:i,onReply:a,onReport:c,onDelete:l,user:u}){return(0,Q.jsxs)(`div`,{className:`\r
        group\r
        space-y-2\r
        rounded-lg\r
        p-2\r
        -mx-2\r
        transition-colors\r
        hover:bg-muted/40\r
      `,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-2 min-w-0`,children:[(0,Q.jsxs)(q,{className:`h-7 w-7 shrink-0`,children:[(0,Q.jsx)(K,{src:e.avatar}),(0,Q.jsx)(G,{className:`text-[10px]`,children:e.author?.[0]})]}),(0,Q.jsxs)(`div`,{className:`min-w-0 flex flex-wrap items-center gap-1.5`,children:[(0,Q.jsx)(`span`,{className:`text-xs font-semibold text-foreground`,children:e.author}),e.authorId===u?.id&&u?.role==`admin`&&(0,Q.jsx)(`span`,{className:`\r
                rounded-full\r
                border\r
                border-primary/20\r
                bg-primary/10\r
                px-1.5\r
                py-0.5\r
                text-[9px]\r
                font-semibold\r
                text-primary\r
              `,children:`admin`}),(0,Q.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:le(e.createdAt)})]})]}),e.replyToAuthor&&(0,Q.jsx)(`div`,{className:`pl-9`,children:(0,Q.jsxs)(`button`,{type:`button`,className:`\r
              text-[11px]\r
              text-primary\r
              hover:underline\r
            `,children:[`↳ Trả lời`,` `,(0,Q.jsxs)(`span`,{className:`font-semibold`,children:[`@`,e.replyToAuthor]})]})}),(0,Q.jsx)(`p`,{className:`\r
          pl-9\r
          text-sm\r
          leading-5\r
          text-foreground/85\r
          whitespace-pre-wrap\r
          break-words\r
        `,children:e.content}),(0,Q.jsxs)(`div`,{className:`\r
          flex\r
          items-center\r
          gap-4\r
          pl-9\r
          text-[11px]\r
          text-muted-foreground\r
        `,children:[(0,Q.jsxs)(`button`,{type:`button`,onClick:()=>i(e.id,!0,t.id),className:`
            flex
            items-center
            gap-1
            transition-colors
            ${r?`text-destructive`:`hover:text-destructive`}
          `,children:[(0,Q.jsx)(v,{className:`h-3 w-3 ${r?`fill-current`:``}`}),e.likes]}),(0,Q.jsxs)(`button`,{type:`button`,onClick:()=>a({parentId:t.id,replyToId:e.id,replyToAuthor:e.author}),className:`\r
            flex\r
            items-center\r
            gap-1\r
            hover:text-primary\r
          `,children:[(0,Q.jsx)(n,{className:`h-3 w-3`}),`Trả lời`]}),u?.id!==e.authorId&&(0,Q.jsxs)(`button`,{type:`button`,onClick:()=>c(e),className:`\r
              flex\r
              items-center\r
              gap-1\r
              hover:text-destructive\r
            `,children:[(0,Q.jsx)(y,{className:`h-3 w-3`}),`Report`]}),(0,Q.jsx)(w,{do:`update`,on:o(`Comment`,e),children:(0,Q.jsxs)(`button`,{type:`button`,className:`\r
              flex\r
              items-center\r
              gap-1\r
              hover:text-primary\r
            `,children:[(0,Q.jsx)(s,{className:`h-3.5 w-3.5`}),`Sửa`]})}),(0,Q.jsx)(w,{do:`delete`,on:o(`Comment`,e),children:(0,Q.jsxs)(`button`,{type:`button`,onClick:()=>l(e.id),className:`\r
              flex\r
              items-center\r
              gap-1\r
              hover:text-destructive\r
            `,children:[(0,Q.jsx)(b,{className:`h-3.5 w-3.5`}),`Xóa`]})})]})]})}function me({replyToAuthor:e,value:t,onChange:r,onSubmit:i,onCancel:a}){return(0,Q.jsxs)(`div`,{className:`\r
        ml-8\r
        mt-4\r
        space-y-3\r
        rounded-lg\r
        border\r
        border-border\r
        bg-muted/30\r
        p-3\r
        sm:ml-12\r
      `,children:[(0,Q.jsx)(`div`,{className:`flex items-center justify-between gap-3`,children:(0,Q.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`Đang trả lời`,` `,(0,Q.jsxs)(`span`,{className:`font-semibold text-primary`,children:[`@`,e]})]})}),(0,Q.jsx)(X,{autoFocus:!0,value:t,onChange:e=>r(e.target.value),placeholder:`Trả lời @${e}...`,className:`\r
          min-h-[75px]\r
          resize-none\r
          border-input\r
          bg-background\r
          text-foreground\r
          placeholder:text-muted-foreground\r
          focus-visible:ring-1\r
          focus-visible:ring-ring\r
        `}),(0,Q.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,Q.jsx)(W,{type:`button`,onClick:a,size:`sm`,variant:`ghost`,className:`text-muted-foreground`,children:`Hủy`}),(0,Q.jsxs)(W,{type:`button`,onClick:i,disabled:!t.trim(),size:`sm`,className:`gap-1.5`,children:[(0,Q.jsx)(n,{className:`h-3.5 w-3.5`}),`Trả lời`]})]})]})}function he({comment:e,liked:t,expanded:r,replyingTo:i,replyContent:a,user:c,onLike:l,onReply:u,onReport:d,onDelete:f,onToggleReplies:p,onReplyContentChange:m,onSubmitReply:h,onCancelReply:_,editingId:x,editContent:S,onEdit:C,onEditChange:T,onSubmitEdit:E,onCancelEdit:D,isLiked:O}){let k=e.replies??[],A=r?k:k.slice(0,1),j=x===e.id,M=i?.parentId===e.id;return(0,Q.jsxs)(`article`,{className:`\r
        rounded-xl\r
        border\r
        border-border\r
        bg-card\r
        p-4\r
        shadow-sm\r
        transition-shadow\r
        hover:shadow-md\r
      `,children:[(0,Q.jsx)(`div`,{className:`flex items-start justify-between gap-3`,children:(0,Q.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[(0,Q.jsxs)(q,{className:`h-9 w-9 shrink-0 border border-border`,children:[(0,Q.jsx)(K,{src:e.avatar}),(0,Q.jsx)(G,{children:e.author?.[0]})]}),(0,Q.jsxs)(`div`,{className:`min-w-0`,children:[(0,Q.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,Q.jsx)(`span`,{className:`text-sm font-semibold text-foreground`,children:e.author}),c?.role===`admin`&&c?.id===e.authorId&&(0,Q.jsx)(`span`,{className:`\r
                  \r
                    rounded-full\r
                    border\r
                    border-primary/20\r
                    bg-primary/10\r
                    px-2\r
                    py-0.5\r
                    text-[10px]\r
                    font-semibold\r
                    text-primary\r
                  `,children:`admin`})]}),(0,Q.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:le(e.createdAt)})]})]})}),j?(0,Q.jsxs)(`div`,{className:`space-y-2 pl-12 pt-2`,children:[(0,Q.jsx)(X,{autoFocus:!0,value:S,onChange:e=>T(e.target.value),placeholder:`Sửa bình luận...`,className:`\r
              min-h-[75px]\r
              resize-none\r
              border-input\r
              bg-background\r
              text-foreground\r
              placeholder:text-muted-foreground\r
              focus-visible:ring-1\r
              focus-visible:ring-ring\r
            `}),(0,Q.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,Q.jsx)(W,{type:`button`,size:`sm`,variant:`ghost`,className:`text-muted-foreground`,onClick:D,children:`Hủy`}),(0,Q.jsxs)(W,{type:`button`,size:`sm`,onClick:E,disabled:!S.trim(),className:`gap-1.5`,children:[(0,Q.jsx)(g,{className:`h-3.5 w-3.5`}),`Lưu`]})]})]}):(0,Q.jsx)(`p`,{className:`\r
            pl-12\r
            pt-2\r
            text-sm\r
            leading-6\r
            text-foreground/90\r
            whitespace-pre-wrap\r
            break-words\r
          `,children:e.content}),(0,Q.jsxs)(`div`,{className:`\r
          flex\r
          items-center\r
          gap-4\r
          pl-12\r
          pt-3\r
          text-xs\r
          text-muted-foreground\r
        `,children:[(0,Q.jsxs)(`button`,{type:`button`,onClick:()=>l(e.id),className:`
            flex
            items-center
            gap-1
            ${t?`text-destructive`:`hover:text-destructive`}
          `,children:[(0,Q.jsx)(v,{className:`h-3.5 w-3.5 ${t?`fill-current`:``}`}),e.likes]}),(0,Q.jsxs)(`button`,{type:`button`,onClick:()=>u({parentId:e.id,replyToId:e.id,replyToAuthor:e.author}),className:`\r
            flex\r
            items-center\r
            gap-1\r
            hover:text-primary\r
          `,children:[(0,Q.jsx)(n,{className:`h-3.5 w-3.5`}),`Trả lời`]}),c&&c.id!==e.authorId&&(0,Q.jsxs)(`button`,{type:`button`,onClick:()=>d(e),className:`\r
              flex\r
              items-center\r
              gap-1\r
              hover:text-destructive\r
            `,children:[(0,Q.jsx)(y,{className:`h-3.5 w-3.5`}),`Report`]}),(0,Q.jsx)(w,{do:`update`,on:o(`Comment`,e),children:(0,Q.jsxs)(`button`,{onClick:()=>C(e),type:`button`,className:`\r
              flex\r
              items-center\r
              gap-1\r
              hover:text-primary\r
            `,children:[(0,Q.jsx)(s,{className:`h-3.5 w-3.5`}),`Sửa`]})}),(0,Q.jsx)(w,{do:`delete`,on:o(`Comment`,e),children:(0,Q.jsxs)(`button`,{type:`button`,onClick:()=>f(e.id),className:`\r
              flex\r
              items-center\r
              gap-1\r
              hover:text-destructive\r
            `,children:[(0,Q.jsx)(b,{className:`h-3.5 w-3.5`}),`Xóa`]})})]}),M&&(0,Q.jsx)(me,{replyToAuthor:i.replyToAuthor,value:a,onChange:m,onSubmit:h,onCancel:_}),e.replies?.length>0&&(0,Q.jsxs)(`div`,{className:`\r
            ml-4\r
            mt-4\r
            border-l-2\r
            border-border\r
            pl-4\r
            sm:ml-8\r
          `,children:[(0,Q.jsx)(`div`,{className:`space-y-3`,children:A.map(t=>(0,Q.jsx)(pe,{user:c,reply:t,parentComment:e,liked:!!O?.[t.id],onLike:l,onReply:u,onReport:d,onDelete:f},t.id))}),k.length>=2&&(0,Q.jsx)(`button`,{type:`button`,onClick:()=>p(e.id),className:`\r
                ml-9\r
                mt-3\r
                text-xs\r
                font-semibold\r
                text-primary\r
                hover:underline\r
              `,children:r?`Thu gọn`:`Xem thêm ${k.length-1} phản hồi`})]})]})}var ge=N;function _e({className:e,...t}){return(0,Q.jsx)(D,{"data-slot":`select-value`,className:V(`flex flex-1 text-left`,e),...t})}function ve({className:e,size:n=`default`,children:r,...i}){return(0,Q.jsxs)(O,{"data-slot":`select-trigger`,"data-size":n,className:V(`flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,e),...i,children:[r,(0,Q.jsx)(L,{render:(0,Q.jsx)(t,{className:`pointer-events-none size-4 text-muted-foreground`})})]})}function ye({className:e,children:t,side:n=`bottom`,sideOffset:r=4,align:i=`center`,alignOffset:a=0,alignItemWithTrigger:o=!0,...s}){return(0,Q.jsx)(A,{children:(0,Q.jsx)(E,{side:n,sideOffset:r,align:i,alignOffset:a,alignItemWithTrigger:o,className:`isolate z-50`,children:(0,Q.jsxs)(F,{"data-slot":`select-content`,"data-align-trigger":o,className:V(`relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,e),...s,children:[(0,Q.jsx)(be,{}),(0,Q.jsx)(M,{children:t}),(0,Q.jsx)(xe,{})]})})})}function $({className:e,children:t,...n}){return(0,Q.jsxs)(T,{"data-slot":`select-item`,className:V(`relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2`,e),...n,children:[(0,Q.jsx)(P,{className:`flex flex-1 shrink-0 gap-2 whitespace-nowrap`,children:t}),(0,Q.jsx)(k,{render:(0,Q.jsx)(`span`,{className:`pointer-events-none absolute right-2 flex size-4 items-center justify-center`}),children:(0,Q.jsx)(g,{className:`pointer-events-none`})})]})}function be({className:e,...t}){return(0,Q.jsx)(I,{"data-slot":`select-scroll-up-button`,className:V(`top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4`,e),...t,children:(0,Q.jsx)(l,{})})}function xe({className:e,...n}){return(0,Q.jsx)(j,{"data-slot":`select-scroll-down-button`,className:V(`bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4`,e),...n,children:(0,Q.jsx)(t,{})})}function Se({comment:e,reason:t,success:n,onReasonChange:r,onSubmit:a,onClose:o}){return e?(0,Q.jsx)(ne,{open:!!e,onOpenChange:e=>{e||o()},children:(0,Q.jsxs)(ee,{className:`sm:max-w-md p-9`,children:[(0,Q.jsxs)(te,{children:[(0,Q.jsxs)(re,{className:`flex justify-center items-center gap-2 p-1.5`,children:[(0,Q.jsx)(i,{className:`w-5 h-5 text-red-500`}),`Báo cáo bình luận vi phạm`]}),(0,Q.jsx)(ie,{className:`text-center text-sm text-muted-foreground`,children:`Vui lòng chọn lý do báo cáo để Ban quản trị xử lý.`})]}),n?(0,Q.jsxs)(`div`,{className:`rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center`,children:[(0,Q.jsx)(`p`,{className:`text-sm font-medium text-green-600 dark:text-green-400`,children:`Cảm ơn bạn!`}),(0,Q.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:`Báo cáo của bạn đã được gửi tới Ban quản trị để xử lý.`})]}):(0,Q.jsxs)(`div`,{className:`space-y-5`,children:[(0,Q.jsxs)(`div`,{className:`rounded-lg border bg-muted/50 p-3`,children:[(0,Q.jsx)(`p`,{className:`mb-1 text-xs font-medium text-muted-foreground`,children:`Nội dung bị báo cáo`}),(0,Q.jsxs)(`p`,{className:`text-sm text-foreground`,children:[`"`,e.content,`"`]})]}),e.replyToAuthor&&(0,Q.jsxs)(`div`,{className:`rounded-lg border border-blue-500/20 bg-blue-500/5 p-3`,children:[(0,Q.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Bình luận này đang trả lời`}),(0,Q.jsxs)(`p`,{className:`mt-1 text-sm font-medium text-blue-600 dark:text-blue-400`,children:[`@`,e.replyToAuthor]})]}),(0,Q.jsxs)(`div`,{className:`space-y-2`,children:[(0,Q.jsx)(`label`,{className:`text-sm font-medium`,children:`Lý do báo cáo`}),(0,Q.jsxs)(ge,{value:t,onValueChange:r,children:[(0,Q.jsx)(ve,{className:`w-full`,children:(0,Q.jsx)(_e,{placeholder:`Chọn lý do báo cáo...`})}),(0,Q.jsxs)(ye,{children:[(0,Q.jsx)($,{value:`Spam / Quảng cáo rác`,children:`Spam / Quảng cáo rác`}),(0,Q.jsx)($,{value:`Ngôn từ thù hận / Xúc phạm`,children:`Ngôn từ thù hận / Xúc phạm`}),(0,Q.jsx)($,{value:`Thông tin sai sự thật`,children:`Thông tin sai sự thật`}),(0,Q.jsx)($,{value:`Lý do khác`,children:`Lý do khác`})]})]})]}),(0,Q.jsxs)(ae,{children:[(0,Q.jsx)(W,{type:`button`,variant:`outline`,onClick:o,children:`Hủy`}),(0,Q.jsx)(W,{type:`button`,variant:`destructive`,onClick:a,disabled:!t,children:`Gửi báo cáo`})]})]})]})}):null}var Ce=[{id:`uuid-1`,author:`Trần Minh`,authorId:`u-100`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&amp;q=80`,content:`Bài viết phân tích rất sâu sắc về xu hướng AI năm 2026. Mong tòa soạn có thêm bài viết về mảng bán dẫn!`,likes:18,createdAt:`2026-10-07T01:23:45.123Z`,replies:[{id:`uuid-1-1`,author:`Minh Châu (Tác giả)`,authorId:`u-author-1`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;q=80`,content:`Cảm ơn bạn! Bài phân tích về thị trường Bán dẫn sẽ lên sóng vào tuần sau nhé.`,likes:9,createdAt:`2026-10-06T14:15:30.500Z`,replyToId:`uuid-1`,replyToAuthor:`Trần Minh`},{id:`uuid-1-2`,author:`Nguyễn Văn A`,authorId:`u-102`,avatar:`https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&amp;q=80`,content:`Tôi cũng rất quan tâm đến chủ đề này và mong chờ bài viết tiếp theo.`,likes:4,createdAt:`2026-10-07T01:22:25.360Z`,replyToId:`uuid-1`,replyToAuthor:`Trần Minh`},{id:`c1-3`,author:`Lê Hoàng`,authorId:`u-103`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&amp;q=80`,content:`Hy vọng bài viết tiếp theo sẽ phân tích sâu hơn về thị trường chip.`,likes:2,createdAt:`2026-10-07T00:52:00.000Z`,replyToId:`uuid-1-1`,replyToAuthor:`Minh Châu (Tác giả)`}]},{id:`uuid-2`,author:`Lê Hoàng`,authorId:`u-101`,avatar:`https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&amp;q=80`,content:`Liệu ứng dụng này có tích hợp thêm tính năng nghe đọc báo tự động (Text-to-Speech) không ạ?`,likes:5,createdAt:`2026-10-07T00:22:25.360Z`,replies:[]}];function we({article:e}){let{user:t}=H(),n=U(),[r,i]=(0,Z.useState)(Ce),[a,o]=(0,Z.useState)(``),[s,c]=(0,Z.useState)(null),[l,u]=(0,Z.useState)(``),[f,p]=(0,Z.useState)(null),[m,h]=(0,Z.useState)(``),[g,_]=(0,Z.useState)(`NEWEST`),[v,y]=(0,Z.useState)({}),[b,x]=(0,Z.useState)({}),[S,C]=(0,Z.useState)(null),[w,T]=(0,Z.useState)(``),[E,D]=(0,Z.useState)(!1),O=e=>{if(e.preventDefault(),!t){n();return}let r=a.trim();if(!r)return;let s={id:crypto.randomUUID(),authorId:t.id,author:t?.name||`Bạn`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80`,content:r,likes:0,createdAt:new Date().toISOString(),replies:[]};i(e=>[s,...e]),o(``)},k=({parentId:e,replyToId:r,replyToAuthor:i})=>{if(!t){n();return}c({parentId:e,replyToId:r,replyToAuthor:i}),u(``),p(null),x(t=>({...t,[e]:!0}))},A=()=>{c(null),u(``)},j=()=>{if(!t||!s)return;let e=l.trim();if(!e)return;let n={id:crypto.randomUUID(),author:t?.name||`Bạn`,authorId:t.id,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80`,content:e,likes:0,createdAt:new Date().toISOString(),replyToId:s.replyToId,replyToAuthor:s.replyToAuthor};i(e=>e.map(e=>e.id===s.parentId?{...e,replies:[...e.replies,n]}:e)),x(e=>({...e,[s.parentId]:!0})),A()},M=e=>{p(e.id),h(e.content),c(null)},N=()=>{p(null),h(``)},P=()=>{let e=m.trim();!e||!f||(i(t=>t.map(t=>t.id===f?{...t,content:e}:t)),N())},F=(e,r=!1,a=null)=>{if(!t){n();return}let o=!!v[e];if(y(t=>({...t,[e]:!o})),!r){i(t=>t.map(t=>t.id===e?{...t,likes:o?Math.max(0,t.likes-1):t.likes+1}:t));return}i(t=>t.map(t=>t.id===a?{...t,replies:t.replies.map(t=>t.id===e?{...t,likes:o?Math.max(0,t.likes-1):t.likes+1}:t)}:t))},I=e=>{x(t=>({...t,[e]:!t[e]}))},L=e=>{C(e),T(``),D(!1)},R=()=>{C(null),T(``),D(!1)},z=()=>{if(!t){n();return}w&&D(!0)},B=e=>{f===e&&N(),i(t=>t.filter(t=>t.id!==e))},V=[...r].sort((e,t)=>g===`MOST_LIKED`?t.likes-e.likes:new Date(t.createdAt)-new Date(e.createdAt));return(0,Q.jsxs)(`section`,{className:`space-y-6 border-t border-border pt-6`,children:[(0,Q.jsxs)(`div`,{className:`\r
          flex\r
          flex-col\r
          gap-3\r
          sm:flex-row\r
          sm:items-center\r
          sm:justify-between\r
        `,children:[(0,Q.jsxs)(`h3`,{className:`\r
            flex\r
            items-center\r
            gap-2\r
            text-xl\r
            font-bold\r
            tracking-tight\r
            text-foreground\r
          `,children:[(0,Q.jsx)(d,{className:`h-5 w-5 text-primary`}),`Bình luận (`,r.length,`)`]}),(0,Q.jsx)(fe,{filter:g,onChange:_})]}),(0,Q.jsx)(de,{value:a,onChange:o,onSubmit:O}),(0,Q.jsxs)(`div`,{className:`space-y-4`,children:[V.map(e=>(0,Q.jsx)(he,{user:t,comment:e,liked:!!v[e.id],expanded:!!b[e.id],replyingTo:s,replyContent:l,onLike:F,onReply:k,onReport:L,onDelete:B,onToggleReplies:I,onReplyContentChange:u,onSubmitReply:j,onCancelReply:A,editingId:f,editContent:m,onEdit:M,onEditChange:h,onSubmitEdit:P,onCancelEdit:N,isLiked:v},e.id)),V.length===0&&(0,Q.jsxs)(`div`,{className:`\r
              rounded-xl\r
              border\r
              border-dashed\r
              border-border\r
              bg-muted/30\r
              p-10\r
              text-center\r
            `,children:[(0,Q.jsx)(d,{className:`mx-auto mb-3 h-8 w-8 text-muted-foreground`}),(0,Q.jsx)(`p`,{className:`text-sm font-medium text-foreground`,children:`Chưa có bình luận nào`}),(0,Q.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:`Hãy là người đầu tiên chia sẻ ý kiến.`})]})]}),(0,Q.jsx)(Se,{comment:S,reason:w,success:E,onReasonChange:T,onSubmit:z,onClose:R})]})}function Te(){let{id:e}=z(),{user:t}=H(),n=Y.find(t=>t.id===e||t.slug===e),[i,o]=(0,Z.useState)(128),[s,l]=(0,Z.useState)(!1),[d,m]=(0,Z.useState)(!1),[y,b]=(0,Z.useState)(`text-base`),[S,w]=(0,Z.useState)(!1),T=U(),[E,D]=(0,Z.useState)(0);if((0,Z.useEffect)(()=>{let e=null,t=()=>{e===null&&(e=requestAnimationFrame(()=>{let t=document.documentElement.scrollHeight-window.innerHeight;if(t>0){let e=window.scrollY/t*100;D(Math.min(100,Math.max(0,e)))}e=null}))};return window.addEventListener(`scroll`,t,{passive:!0}),()=>{window.removeEventListener(`scroll`,t),e!==null&&cancelAnimationFrame(e)}},[]),!n)return(0,Q.jsx)(ce,{});let O=()=>{if(!t)return T();l(!s),o(e=>s?e-1:e+1)},k=()=>{navigator.clipboard&&(navigator.clipboard.writeText(window.location.href),w(!0),setTimeout(()=>w(!1),2e3))},A=Y.filter(e=>e.id!==n.id).slice(0,3),j=[...Y].sort((e,t)=>(t.views||0)-(e.views||0)).slice(0,4),M=t&&(t.role===`admin`||t.id===n.authorId);return(0,Q.jsxs)(oe,{children:[(0,Q.jsx)(`div`,{className:`fixed top-0 left-0 w-full h-1 bg-transparent z-50`,children:(0,Q.jsx)(`div`,{className:`h-full bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 transition-all duration-150`,style:{width:`${E}%`}})}),(0,Q.jsxs)(`div`,{className:`space-y-6`,children:[(0,Q.jsxs)(`nav`,{className:`flex items-center gap-2 text-xs text-muted-foreground font-medium flex-wrap`,children:[(0,Q.jsxs)(B,{to:`/`,className:`flex items-center gap-1 hover:text-foreground transition-colors`,children:[(0,Q.jsx)(p,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{children:`Trang chủ`})]}),(0,Q.jsx)(_,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(B,{to:`/category/${n.categorySlug||`tin-tuc`}`,className:`hover:text-foreground transition-colors`,children:n.category}),(0,Q.jsx)(_,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{className:`text-foreground truncate max-w-[280px] md:max-w-md font-semibold`,children:n.title})]}),(0,Q.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-8`,children:[(0,Q.jsxs)(`div`,{className:`lg:col-span-2 space-y-6`,children:[(0,Q.jsxs)(`div`,{className:`space-y-4`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,Q.jsx)(B,{to:`/category/${n.categorySlug||`tin-tuc`}`,children:(0,Q.jsx)(J,{className:`bg-red-600 hover:bg-red-700 text-white cursor-pointer shadow-xs`,children:n.category})}),M&&(0,Q.jsx)(B,{to:`/author/edit/${n.id}`,children:(0,Q.jsxs)(W,{variant:`outline`,size:`xs`,className:`gap-1.5 text-xs text-primary border-primary/30 hover:bg-primary/10`,children:[(0,Q.jsx)(h,{className:`w-3 h-3`}),` Chỉnh sửa bài`]})})]}),(0,Q.jsx)(`h1`,{className:`text-2xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight`,children:n.title}),(0,Q.jsx)(`p`,{className:`text-base md:text-lg text-muted-foreground font-medium italic border-l-4 border-primary pl-4 py-1 leading-relaxed`,children:n.excerpt}),(0,Q.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between border-y border-border py-3.5 gap-4 text-sm text-muted-foreground`,children:[(0,Q.jsxs)(B,{to:`/author-profile/${n.authorId||101}`,className:`flex items-center gap-3 group cursor-pointer`,children:[(0,Q.jsxs)(q,{className:`w-10 h-10 border border-border group-hover:border-primary transition-colors`,children:[(0,Q.jsx)(K,{src:n.authorAvatar||`https://github.com/shadcn.png`}),(0,Q.jsx)(G,{children:n.author?.[0]||`A`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`font-semibold text-foreground group-hover:text-primary transition-colors`,children:n.author}),(0,Q.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:n.publishedAt})]})]}),(0,Q.jsxs)(`div`,{className:`flex items-center gap-4 text-xs`,children:[(0,Q.jsxs)(`span`,{className:`flex items-center gap-1.5 bg-muted px-2.5 py-1 rounded-full`,children:[(0,Q.jsx)(x,{className:`w-3.5 h-3.5 text-primary`}),` `,n.readingTime||`3 phút đọc`]}),(0,Q.jsxs)(`span`,{className:`flex items-center gap-1.5 bg-muted px-2.5 py-1 rounded-full`,children:[(0,Q.jsx)(C,{className:`w-3.5 h-3.5 text-primary`}),` `,ue(n.views),` lượt xem`]})]})]})]}),(0,Q.jsxs)(`div`,{className:`flex items-center justify-between bg-card border border-border p-3 rounded-xl shadow-2xs`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsxs)(W,{variant:s?`default`:`outline`,size:`sm`,onClick:O,className:`gap-1.5 cursor-pointer ${s?`bg-red-600 hover:bg-red-700 text-white`:`border-border text-foreground hover:bg-muted`}`,children:[(0,Q.jsx)(v,{className:`w-4 h-4 ${s?`fill-white text-white`:``}`}),(0,Q.jsx)(`span`,{children:i})]}),(0,Q.jsxs)(W,{variant:d?`default`:`outline`,size:`sm`,onClick:()=>{if(!t)return T();m(!d)},className:`gap-1.5 cursor-pointer ${d?`bg-primary text-primary-foreground`:`border-border text-foreground hover:bg-muted`}`,children:[(0,Q.jsx)(a,{className:`w-4 h-4 ${d?`fill-current`:``}`}),(0,Q.jsx)(`span`,{children:d?`Đã lưu`:`Lưu bài`})]}),(0,Q.jsxs)(W,{variant:`outline`,size:`sm`,onClick:k,className:`gap-1.5 border-border text-foreground hover:bg-muted cursor-pointer`,children:[S?(0,Q.jsx)(g,{className:`w-4 h-4 text-emerald-500`}):(0,Q.jsx)(u,{className:`w-4 h-4`}),(0,Q.jsx)(`span`,{children:S?`Đã copy`:`Chia sẻ`})]})]}),(0,Q.jsxs)(`div`,{className:`flex items-center gap-1 bg-muted p-1 rounded-lg`,children:[(0,Q.jsx)(W,{variant:`ghost`,size:`icon`,className:`h-7 w-7 cursor-pointer ${y===`text-sm`?`bg-background text-foreground shadow-2xs font-bold`:`text-muted-foreground`}`,onClick:()=>b(`text-sm`),title:`Thu nhỏ chữ`,children:(0,Q.jsx)(f,{className:`w-3.5 h-3.5`})}),(0,Q.jsx)(W,{variant:`ghost`,size:`icon`,className:`h-7 w-7 text-xs font-bold cursor-pointer ${y===`text-base`?`bg-background text-foreground shadow-2xs`:`text-muted-foreground`}`,onClick:()=>b(`text-base`),title:`Cỡ chữ mặc định`,children:`A`}),(0,Q.jsx)(W,{variant:`ghost`,size:`icon`,className:`h-7 w-7 cursor-pointer ${y===`text-lg`?`bg-background text-foreground shadow-2xs font-bold`:`text-muted-foreground`}`,onClick:()=>b(`text-lg`),title:`Phóng to chữ`,children:(0,Q.jsx)(r,{className:`w-3.5 h-3.5`})})]})]}),(0,Q.jsx)(`div`,{className:`rounded-xl overflow-hidden border border-border shadow-xs bg-muted`,children:(0,Q.jsx)(`img`,{src:n.image,alt:n.title,width:1200,height:460,decoding:`async`,className:`w-full max-h-[460px] object-cover`})}),(0,Q.jsx)(`div`,{className:`prose dark:prose-invert max-w-none space-y-4 text-foreground leading-relaxed ${y}`,dangerouslySetInnerHTML:{__html:c.sanitize(n.content||`<p>Nội dung bài viết đang được cập nhật...</p>`)}}),n.tags&&n.tags.length>0&&(0,Q.jsxs)(`div`,{className:`flex items-center gap-2 pt-4 border-t border-border flex-wrap`,children:[(0,Q.jsx)(`span`,{className:`text-xs text-muted-foreground font-semibold`,children:`Từ khóa:`}),n.tags.map(e=>(0,Q.jsx)(B,{to:`/tag/${e.toLowerCase()}`,children:(0,Q.jsxs)(J,{variant:`secondary`,className:`hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-xs`,children:[`#`,e]})},e))]}),(0,Q.jsx)(`div`,{className:`pt-8 border-t border-border`,children:(0,Q.jsx)(we,{article:n},n.id)})]}),(0,Q.jsxs)(`div`,{className:`space-y-6`,children:[(0,Q.jsxs)(`div`,{className:`bg-card border border-border rounded-xl p-5 space-y-4 shadow-2xs`,children:[(0,Q.jsxs)(`h3`,{className:`font-bold text-base text-foreground border-b border-border pb-3 flex items-center gap-2`,children:[(0,Q.jsx)(`span`,{className:`w-2 h-4 bg-red-500 rounded-full`}),`Đọc nhiều nhất`]}),(0,Q.jsx)(`div`,{className:`space-y-4`,children:j.map((e,t)=>(0,Q.jsxs)(B,{to:`/article/${e.slug||e.id}`,className:`flex gap-3 group cursor-pointer`,children:[(0,Q.jsxs)(`span`,{className:`text-2xl font-black text-muted-foreground/60 group-hover:text-primary transition-colors shrink-0`,children:[`0`,t+1]}),(0,Q.jsxs)(`div`,{className:`space-y-1`,children:[(0,Q.jsx)(`h4`,{className:`text-xs font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug`,children:e.title}),(0,Q.jsxs)(`span`,{className:`text-[11px] text-muted-foreground`,children:[ue(e.views),` lượt xem`]})]})]},e.id))})]}),(0,Q.jsxs)(`div`,{className:`space-y-4`,children:[(0,Q.jsxs)(`h3`,{className:`font-bold text-base text-foreground flex items-center gap-2`,children:[(0,Q.jsx)(`span`,{className:`w-2 h-4 bg-primary rounded-full`}),`Bài viết liên quan`]}),(0,Q.jsx)(`div`,{className:`space-y-4`,children:A.map(e=>(0,Q.jsx)(se,{article:e},e.id))})]})]})]})]})]})}export{Te as default};